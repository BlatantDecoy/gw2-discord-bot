import discord
from discord.ext import commands

# Set up intents
intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

# Store sign-ups for each raid message
sign_ups = {}

@bot.event
async def on_ready():
    await bot.tree.sync()
    print(f'Bot is ready. Logged in as {bot.user}')

# Command to initiate raid creation
@bot.tree.command(name="raid_new", description="Create a new raid")
async def raid_new(interaction: discord.Interaction):
    # Create a modal for raid details
    modal = discord.ui.Modal(title="Raid Details", timeout=60)

    # Use a text input for wings selection
    wings_input = discord.ui.TextInput(label="Wings", placeholder="e.g., 1, 2, 3")  # Accepts comma-separated values
    modal.add_item(wings_input)

    # Adding Text Input fields to the Modal
    start_time_input = discord.ui.TextInput(label="Start Time", placeholder="e.g., 8:00 PM")
    end_time_input = discord.ui.TextInput(label="End Time", placeholder="e.g., 10:00 PM")
    description_input = discord.ui.TextInput(label="Description", style=discord.TextStyle.paragraph)

    # Add inputs to the modal
    modal.add_item(start_time_input)
    modal.add_item(end_time_input)
    modal.add_item(description_input)

    # Attempt to send the modal
    await interaction.response.send_modal(modal)

# Event to handle modal submission
@bot.event
async def on_interaction(interaction: discord.Interaction):
    if interaction.type == discord.InteractionType.modal_submit:
        # Retrieve the input values from the modal
        wings = interaction.data['components'][0]['components'][0]['value']  # Wings
        start_time = interaction.data['components'][1]['components'][0]['value']  # Start Time
        end_time = interaction.data['components'][2]['components'][0]['value']    # End Time
        description = interaction.data['components'][3]['components'][0]['value']  # Description

        try:
            # Send a confirmation message in the channel
            message = await interaction.channel.send(f"Raid scheduled!\n**Wings**: {wings}\n**Start Time**: {start_time}\n**End Time**: {end_time}\n**Description**: {description}")

            # Store the sign-up list for this message
            sign_ups[message.id] = []

            # Add a sign-up button
            sign_up_button = discord.ui.Button(label="Sign Up", style=discord.ButtonStyle.green)
            view = discord.ui.View()
            view.add_item(sign_up_button)
            await message.edit(view=view)

            # Acknowledge the interaction
            await interaction.response.send_message("Your raid has been scheduled!", ephemeral=True)

            # Button interaction
            async def sign_up_callback(interaction: discord.Interaction):
                # Ask for the user's role
                roles = ["Quick Heal", "Alacrity Heal", "Quick DPS", "Alacrity DPS", "DPS"]
                role_select = discord.ui.Select(placeholder="Select your role", options=[discord.SelectOption(label=role) for role in roles])

                async def role_select_callback(interaction: discord.Interaction):
                    selected_role = role_select.values[0]
                    user_mention = interaction.user.mention

                    # Add user to the sign-up list
                    sign_ups[message.id].append((user_mention, selected_role))

                    # Edit the original message to show the sign-up list
                    sign_up_list = "\n".join([f"{user} - {role}" for user, role in sign_ups[message.id]])
                    await message.edit(content=f"Raid scheduled!\n**Wings**: {wings}\n**Start Time**: {start_time}\n**End Time**: {end_time}\n**Description**: {description}\n\n**Sign-Ups:**\n{sign_up_list}")

                    await interaction.response.send_message(f"{user_mention} has signed up as **{selected_role}**!", ephemeral=True)

                role_select.callback = role_select_callback
                view = discord.ui.View()
                view.add_item(role_select)
                await interaction.response.send_message("Please select your role:", view=view, ephemeral=True)

            sign_up_button.callback = sign_up_callback

        except discord.Forbidden:
            # Handle the case where the bot doesn't have permission
            await interaction.response.send_message("I cannot send messages in this channel. Please check my permissions.", ephemeral=True)
        except Exception as e:
            # Handle other exceptions
            await interaction.response.send_message(f"An error occurred: {str(e)}", ephemeral=True)

# Run the bot

bot.run('MTMwMTA4MTI2MzY0MTQ2NDg1NA.G8QPov.rkt-fD4T_pB9r1MeEvjFAWeMsGVKXo8lcAMbEw')