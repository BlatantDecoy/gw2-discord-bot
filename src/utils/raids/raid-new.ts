import { Interaction, CommandInteraction, TextInputStyle, TextInputBuilder } from 'discord.js';
import { createModal } from '../createModal';

export function raidNew(interaction: Interaction) {
    // Code to run when the "new" choice is selected
    if (interaction instanceof CommandInteraction) {
        const eventTitleInput = new TextInputBuilder()
          .setCustomId('eventTitleInput')
          .setLabel("Event Title")
          .setStyle(TextInputStyle.Short);
        
        const wingsInput = new TextInputBuilder()
          .setCustomId('wingsInput')
          .setLabel("Wings")
          .setStyle(TextInputStyle.Short);

        const startDateInput = new TextInputBuilder()
          .setCustomId('startDateInput')
          .setLabel("Start Date (YYYY-MM-DD)")
          .setStyle(TextInputStyle.Short);

        const endDateInput = new TextInputBuilder()
          .setCustomId('endDateInput')
          .setLabel("End Date (YYYY-MM-DD)")
          .setStyle(TextInputStyle.Short);

        const descriptionInput = new TextInputBuilder()
          .setCustomId('descriptionInput')
          .setLabel("Description")
          .setStyle(TextInputStyle.Paragraph);
        
        const components = [eventTitleInput, wingsInput, startDateInput, endDateInput, descriptionInput];
        
        createModal(interaction, 'New Raid event', components);

        // Handle modal submission event
        const filter = (interaction => interaction.customId === 'raidModal-${interaction.user.id}');
        interaction
          .awaitModalSubmit({ filter, time: 15000 })
          .then((ModalSubmitInteraction) => {
            const eventTitle = ModalSubmitInteraction.fields.getTextInputValue('eventTitleInput');
            const wings = ModalSubmitInteraction.fields.getTextInputValue('wingsInput');
            const startDate = ModalSubmitInteraction.fields.getTextInputValue('startDateInput');
            const endDate = ModalSubmitInteraction.fields.getTextInputValue('endDateInput');
            const description = ModalSubmitInteraction.fields.getTextInputValue('descriptionInput');

            ModalSubmitInteraction.reply(`Event Title: ${eventTitle}\nWings: ${wings}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nDescription: ${description}`);
          })
    } else {
        // Handle the case where interaction is not a CommandInteraction
    }
}