import { Interaction, CommandInteraction } from 'discord.js';

export function raidEnd(interaction: Interaction) {
    // Code to run when the "start" choice is selected
    if (interaction instanceof CommandInteraction) {
        interaction.reply('/raid end');
    } else {
        // Handle the case where interaction is not a CommandInteraction
    }
}