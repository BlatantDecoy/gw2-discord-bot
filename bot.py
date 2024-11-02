import discord
from discord.ext import commands
import re
from datetime import datetime

# Set up intents
intents = discord.Intents.default()
intents.message_content = True  # Enable intent if using message content interactions
bot = commands.Bot(command_prefix="gkrm!", intents=intents)

# Store sign-ups and reserves for each raid message
sign_ups = {}
reserves = {}

# Wing mechanics dictionary
wing_mechanics_dict = {
    "1": ["Cannons (W1B3)"],
    "2": ["Mushrooms (W2B1)", "Mortar (W2B2)", "Feedback (W2B3)"],
    "3": ["Towers (W3B1)"],
    "4": ["Claim (W4B2)", "Dispell (W4B2)", "Protect (W4B2)", "Handkite (W4B4)"],
    "5": ["Push (W5B1)", "Eyes Thrower (W5B2)", "Green 1 (W5B3)", "Green 2/Kite (W5B3)"],
    "6": ["Swords (W6B1)", "Shield (W6B1)", "Largos Kite (W6B2)", "Slub Kite (W6B3)", "Lamp (W6B3)"],
    "7": ["Pillars (W7 Adina)", "Bubble/Reflect (W7 Sabir/Adina)", "Pylons (W7B3)"]
}

# Define roles as a dictionary with role names and their limits
roles = {
    "Alacrity Heal": {"count": 0, "max": 2},
    "Quick Heal": {"count": 0, "max": 2},
    "Alacrity DPS": {"count": 0, "max": 2},
    "Quick DPS": {"count": 0, "max": 2},
    "Regular DPS": {"count": 0, "max": 6}
}

@bot.event
async def on_ready():
    await bot.tree.sync()
    print(f'Bot is ready. Logged in as {bot.user}')

# Command to initiate raid creation
@bot.tree.command(name="raid_new", description="Create a new raid")
async def raid_new(interaction: discord.Interaction):
    modal = discord.ui.Modal(title="Raid Details", timeout=60)

    title_input = discord.ui.TextInput(label="Title", placeholder="Enter raid title")
    wings_input = discord.ui.TextInput(label="Wings", placeholder="e.g., 1,2,3")
    start_time_input = discord.ui.TextInput(label="Start Time", placeholder="e.g., 2024-11-01 20:00")
    end_time_input = discord.ui.TextInput(label="End Time (optional)", required=False, placeholder="e.g., 2024-11-01 22:00")
    description_input = discord.ui.TextInput(label="Description (optional)", style=discord.TextStyle.paragraph, required=False)

    modal.add_item(title_input)
    modal.add_item(wings_input)
    modal.add_item(start_time_input)
    modal.add_item(end_time_input)
    modal.add_item(description_input)

    await interaction.response.send_modal(modal)

# Event to handle modal submission
@bot.event
async def on_interaction(interaction: discord.Interaction):
    if interaction.type == discord.InteractionType.modal_submit:
        title = interaction.data['components'][0]['components'][0]['value']
        wings = interaction.data['components'][1]['components'][0]['value']
        start_time = interaction.data['components'][2]['components'][0]['value']
        end_time = interaction.data['components'][3]['components'][0]['value']
        description = interaction.data['components'][4]['components'][0]['value']

        # Validate wings input format
        if not re.match(r'^\d+(,\d+)*$', wings.strip()):
            await interaction.response.send_message("Invalid input format for Wings. Please use the following format: e.g., 1,2,3", ephemeral=True)
            return

        # Parse the start time and end time
        start_time_str = start_time.strip()
        end_time_str = end_time.strip() if end_time else None

        try:
            start_time_dt = datetime.strptime(start_time_str, '%Y-%m-%d %H:%M')

            # Check if the start time has already passed
            if start_time_dt < datetime.now():
                await interaction.response.send_message("The start time has already passed. Please enter a future time.", ephemeral=True)
                return

            start_time_stamp = f'<t:{int(start_time_dt.timestamp())}:F>'  # Discord timestamp in full date format
        except ValueError:
            await interaction.response.send_message("Invalid start time format. Please use 'YYYY-MM-DD HH:MM'.", ephemeral=True)
            return

        if end_time_str:
            try:
                end_time_dt = datetime.strptime(end_time_str, '%Y-%m-%d %H:%M')
                end_time_stamp = f'<t:{int(end_time_dt.timestamp())}:F>'
            except ValueError:
                await interaction.response.send_message("Invalid end time format. Please use 'YYYY-MM-DD HH:MM'.", ephemeral=True)
                return
        else:
            end_time_stamp = 'Not provided'

        try:
            # Send the initial raid message
            message = await interaction.channel.send(f"**{title}**\n**Wings**: {wings}\n**Start Time**: {start_time_stamp}\n**End Time**: {end_time_stamp}\n**Description**: {description or 'None'}\n\n**Sign-Ups:**\nNone\n\n**Reserves:**\nNone")

            sign_ups[message.id] = {}
            reserves[message.id] = {}

            # Create Sign-Up, Reserve, and Remove Buttons
            sign_up_button = discord.ui.Button(label="Sign Up", style=discord.ButtonStyle.green)
            reserve_button = discord.ui.Button(label="Reserve", style=discord.ButtonStyle.blurple)
            remove_button = discord.ui.Button(label="Remove", style=discord.ButtonStyle.red)

            view = discord.ui.View()
            view.add_item(sign_up_button)
            view.add_item(reserve_button)
            view.add_item(remove_button)
            await message.edit(view=view)

            # Parse selected wings to get associated mechanics
            selected_mechanics = ["None"]
            for wing in wings.split(","):
                selected_mechanics.extend(wing_mechanics_dict.get(wing.strip(), []))

            async def sign_up_callback(interaction: discord.Interaction):
                await interaction.response.defer()  # Acknowledge the interaction
                user_mention = interaction.user.mention

                if user_mention in sign_ups[message.id]:
                    await interaction.followup.send(f"{user_mention}, you are already signed up!", ephemeral=True)
                    return

                if user_mention in reserves[message.id]:
                    await interaction.followup.send(f"{user_mention}, you are already in the reserves and cannot sign up. Please remove yourself from the reserves first.", ephemeral=True)
                    return
                    
                # Count existing Alacrity and Quick roles in sign-ups
                alacrity_count = sum(1 for _, (role, _, _) in sign_ups[message.id].items() if "Alacrity" in role)
                quick_count = sum(1 for _, (role, _, _) in sign_ups[message.id].items() if "Quick" in role)

                available_roles = [role for role in roles.keys() if roles[role]["count"] < roles[role]["max"]]
                if alacrity_count >= 2:
                    available_roles = [role for role in available_roles if "Alacrity" not in role]

                if quick_count >= 2:
                    available_roles = [role for role in available_roles if "Quick" not in role]

                role_select = discord.ui.Select(placeholder="Select your role", options=[discord.SelectOption(label=role) for role in available_roles])

                async def role_select_callback(interaction: discord.Interaction):
                    await interaction.response.defer()  # Acknowledge the interaction
                    selected_role = role_select.values[0]

                    roles[selected_role]["count"] += 1  # Increment the count for the selected role

                    flex_roles = ["None"] + list(roles.keys())
                    flex_role_select = discord.ui.Select(placeholder="Select flex roles", options=[discord.SelectOption(label=role) for role in flex_roles], max_values=len(flex_roles))

                    async def flex_role_select_callback(interaction: discord.Interaction):
                        await interaction.response.defer()  # Acknowledge the interaction
                        selected_flex_roles = flex_role_select.values
                        selected_flex_roles = [role for role in selected_flex_roles if role != "None"]

                        mechanics_select = discord.ui.Select(placeholder="Select Wing Mechanics", options=[discord.SelectOption(label=mechanic) for mechanic in selected_mechanics], max_values=len(selected_mechanics))

                        async def mechanics_select_callback(interaction: discord.Interaction):
                            await interaction.response.defer()  # Acknowledge the interaction
                            selected_mechanics = mechanics_select.values

                            sign_ups[message.id][user_mention] = (selected_role, selected_flex_roles, selected_mechanics)
                            sign_up_list = "\n".join([f"{user}: {details[0]} (Flex: {', '.join(details[1])}, Mechanics: {', '.join(details[2])})" for user, details in sign_ups[message.id].items()])

                            reserve_list = "\n".join([f"{user}" for user in reserves[message.id].keys()])
                            await message.edit(content=f"**{title}**\n**Wings**: {wings}\n**Start Time**: {start_time_stamp}\n**End Time**: {end_time_stamp}\n**Description**: {description or 'None'}\n\n**Sign Ups:**\n{sign_up_list or 'None'}\n\n**Reserves:**\n{reserve_list or 'None'}")

                        mechanics_select.callback = mechanics_select_callback
                        await interaction.followup.send("Select Wing Mechanics:", ephemeral=True, view=discord.ui.View().add_item(mechanics_select))

                    flex_role_select.callback = flex_role_select_callback
                    await interaction.followup.send("Select your Flex roles:", ephemeral=True, view=discord.ui.View().add_item(flex_role_select))

                role_select.callback = role_select_callback
                await interaction.followup.send("Select your role:", ephemeral=True, view=discord.ui.View().add_item(role_select))

            sign_up_button.callback = sign_up_callback

            async def reserve_callback(interaction: discord.Interaction):
                await interaction.response.defer()  # Acknowledge the interaction
                user_mention = interaction.user.mention

                if user_mention in reserves[message.id]:
                    await interaction.followup.send(f"{user_mention}, you are already in the reserves!", ephemeral=True)
                    return

                if user_mention in sign_ups[message.id]:
                    await interaction.followup.send(f"{user_mention}, you are already signed up and cannot join reserves. Please remove yourself from the sign-ups first.", ephemeral=True)
                    return

                reserve_roles = [role for role in roles.keys()]
                reserve_role_select = discord.ui.Select(placeholder="Select reserve roles", options=[discord.SelectOption(label=role) for role in reserve_roles], max_values=len(reserve_roles))

                async def reserve_role_select_callback(interaction: discord.Interaction):
                    await interaction.response.defer()  # Acknowledge the interaction
                    selected_reserve_roles = reserve_role_select.values

                    reserves[message.id][user_mention] = selected_reserve_roles

                    sign_up_list = "\n".join([f"{user}: {details[0]} (Flex: {', '.join(details[1])}, Mechanics: {', '.join(details[2])})" for user, details in sign_ups[message.id].items()])
                    reserve_list = "\n".join([f"{user} (Flex: {', '.join(reserve_roles)})" for user, reserve_roles in reserves[message.id].items()])

                    await message.edit(content=f"**{title}**\n**Wings**: {wings}\n**Start Time**: {start_time_stamp}\n**End Time**: {end_time_stamp}\n**Description**: {description or 'None'}\n\n**Sign Ups:**\n{sign_up_list or 'None'}\n\n**Reserves:**\n{reserve_list or 'None'}", view=view)

                reserve_role_select.callback = reserve_role_select_callback
                await interaction.followup.send("Please select your reserve role(s).", view=discord.ui.View().add_item(reserve_role_select), ephemeral=True)

            reserve_button.callback = reserve_callback

            async def remove_callback(interaction: discord.Interaction):
                await interaction.response.defer()  # Acknowledge the interaction
                user_mention = interaction.user.mention

                if user_mention in sign_ups[message.id]:
                    selected_role = sign_ups[message.id][user_mention][0]
                    roles[selected_role]["count"] -= 1  # Decrement the count for the role
                    del sign_ups[message.id][user_mention]
                elif user_mention in reserves[message.id]:
                    del reserves[message.id][user_mention]
                else:
                    await interaction.followup.send(f"{user_mention}, you are not signed up or in reserves.", ephemeral=True)
                    return

                reserve_list = "\n".join([user for user in reserves[message.id].keys()])
                sign_up_list = "\n".join([f"{user}: {details[0]}" for user, details in sign_ups[message.id].items()])

                await message.edit(content=f"**{title}**\n**Wings**: {wings}\n**Start Time**: {start_time_stamp}\n**End Time**: {end_time_stamp}\n**Description**: {description or 'None'}\n\n**Sign Ups:**\n{sign_up_list or 'None'}\n\n**Reserves:**\n{reserve_list or 'None'}")

            remove_button.callback = remove_callback

            # Acknowledge the modal interaction
            await interaction.response.send_message("Your raid has been scheduled!", ephemeral=True)

        except Exception as e:
            await interaction.response.send_message(f"An error occurred: {str(e)}", ephemeral=True)

bot.run('MTMwMTA4MTI2MzY0MTQ2NDg1NA.G8QPov.rkt-fD4T_pB9r1MeEvjFAWeMsGVKXo8lcAMbEw')