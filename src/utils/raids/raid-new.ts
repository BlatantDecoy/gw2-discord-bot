import { Interaction, CommandInteraction, TextInputStyle, TextInputBuilder } from 'discord.js';
import { createModal } from '../createModal';
import { createEmbedMessage } from '../createEmbedMessage';

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
            const username = ModalSubmitInteraction.user.displayName;
            const userIcon = ModalSubmitInteraction.user.displayAvatarURL();

            const exampleEmbed = createEmbedMessage(
              wings, //title
              description, //description
              'https://discord.js.org/', //url
              eventTitle, //authorName
              'https://i.imgur.com/AfFp7pu.png', //authorIconURL
              'https://discord.js.org', //authorURL
              'https://i.imgur.com/AfFp7pu.png', //thumbnailURL
              [
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
              ], //fields
              'https://i.imgur.com/AfFp7pu.png', //image
              username,
              userIcon
            );
            
            ModalSubmitInteraction.reply({ embeds: [exampleEmbed] })
            //ModalSubmitInteraction.reply(`Event Title: ${eventTitle}\nWings: ${wings}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nDescription: ${description}`);
          })
    } else {
        // Handle the case where interaction is not a CommandInteraction
    }
}