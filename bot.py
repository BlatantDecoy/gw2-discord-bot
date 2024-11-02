import discord
from discord.ext import commands

# Set up intents
intents = discord.Intents.default()
bot = commands.Bot(command_prefix="gkrm!", intents=intents)

# Store sign-ups for each raid message
sign_ups = {}

@bot.event
async def on_ready():
    await bot.tree.sync()
    print(f'Bot is ready. Logged in as {bot.user}')

# Command to initiate raid creation
@bot.tree.command(name="raid_new", description="Create a new raid")
async def raid_new(interaction: discord.Interaction):
    modal = discord.ui.Modal(title="Raid Details", timeout=60)

    wings_input = discord.ui.TextInput(label="Wings", placeholder="e.g., 1, 2, 3")
    start_time_input = discord.ui.TextInput(label="Start Time", placeholder="e.g., 8:00 PM")
    end_time_input = discord.ui.TextInput(label="End Time", placeholder="e.g., 10:00 PM")
    description_input = discord.ui.TextInput(label="Description", style=discord.TextStyle.paragraph)

    modal.add_item(wings_input)
    modal.add_item(start_time_input)
    modal.add_item(end_time_input)
    modal.add_item(description_input)

    await interaction.response.send_modal(modal)

# Event to handle modal submission
@bot.event
async def on_interaction(interaction: discord.Interaction):
    if interaction.type == discord.InteractionType.modal_submit:
        wings = interaction.data['components'][0]['components'][0]['value']
        start_time = interaction.data['components'][1]['components'][0]['value']
        end_time = interaction.data['components'][2]['components'][0]['value']
        description = interaction.data['components'][3]['components'][0]['value']

        try:
            message = await interaction.channel.send(f"Raid scheduled!\n**Wings**: {wings}\n**Start Time**: {start_time}\n**End Time**: {end_time}\n**Description**: {description}")

            sign_ups[message.id] = []

            sign_up_button = discord.ui.Button(label="Sign Up", style=discord.ButtonStyle.green)
            view = discord.ui.View()
            view.add_item(sign_up_button)
            await message.edit(view=view)

            await interaction.response.send_message("Your raid has been scheduled!", ephemeral=True)

            async def sign_up_callback(interaction: discord.Interaction):
                user_mention = interaction.user.mention
                
                # Role selection
                roles = ["Alacrity Heal", "Quick Heal", "Alacrity DPS", "Quick DPS", "DPS"]
                role_select = discord.ui.Select(placeholder="Select your role", options=[discord.SelectOption(label=role) for role in roles])

                async def role_select_callback(interaction: discord.Interaction):
                    selected_role = role_select.values[0]

                    # Flex role selection
                    flex_role_select = discord.ui.Select(placeholder="Select your flex roles", options=[discord.SelectOption(label=role) for role in roles], max_values=len(roles))

                    async def flex_role_select_callback(interaction: discord.Interaction):
                        selected_flex_roles = flex_role_select.values

                        # Wing Mechanics selection
                        wing_mechanics = ["W1B1", "W2B2", "W3B3"]
                        mechanics_select = discord.ui.Select(placeholder="Select Wing Mechanics", options=[discord.SelectOption(label=mechanic) for mechanic in wing_mechanics], max_values=len(wing_mechanics))

                        async def mechanics_select_callback(interaction: discord.Interaction):
                            selected_mechanics = mechanics_select.values
                            sign_ups[message.id].append((user_mention, selected_role, selected_flex_roles, selected_mechanics))
                            
                            sign_up_list = "\n".join([f"{user} - Role: {role}, Flex: {', '.join(flex_roles)}, Mechanics: {', '.join(mechanics)}" for user, role, flex_roles, mechanics in sign_ups[message.id]])
                            await message.edit(content=f"Raid scheduled!\n**Wings**: {wings}\n**Start Time**: {start_time}\n**End Time**: {end_time}\n**Description**: {description}\n\n**Sign-Ups:**\n{sign_up_list}")

                            await interaction.response.send_message(f"{user_mention} has signed up as **{selected_role}** with flex roles **{', '.join(selected_flex_roles)}** and can do **{', '.join(selected_mechanics)}**!", ephemeral=True)

                        mechanics_select.callback = mechanics_select_callback
                        mechanics_view = discord.ui.View()
                        mechanics_view.add_item(mechanics_select)
                        await interaction.response.send_message("Please select your Wing Mechanics:", view=mechanics_view, ephemeral=True)

                    flex_role_select.callback = flex_role_select_callback
                    flex_role_view = discord.ui.View()
                    flex_role_view.add_item(flex_role_select)
                    await interaction.response.send_message("Please select your flex roles:", view=flex_role_view, ephemeral=True)

                role_select.callback = role_select_callback
                view = discord.ui.View()
                view.add_item(role_select)
                await interaction.response.send_message("Please select your role:", view=view, ephemeral=True)

            sign_up_button.callback = sign_up_callback

        except discord.Forbidden:
            await interaction.response.send_message("I cannot send messages in this channel. Please check my permissions.", ephemeral=True)
        except Exception as e:
            print(f"Error: {str(e)}")  # Log error
            await interaction.response.send_message(f"An error occurred: {str(e)}", ephemeral=True)

bot.run('MTMwMTA4MTI2MzY0MTQ2NDg1NA.G8QPov.rkt-fD4T_pB9r1MeEvjFAWeMsGVKXo8lcAMbEw')