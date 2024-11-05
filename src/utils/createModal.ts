import { ActionRowBuilder, ModalActionRowComponentBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, Interaction } from 'discord.js';

export function createModal(interaction: Interaction, title: string, components: TextInputBuilder[]): Promise<void> {
  if (!interaction.isChatInputCommand() && !interaction.isModalSubmit()) {
    throw new Error('Cannot show modal on this type of interaction');
  }

  const modal = new ModalBuilder()
    .setCustomId('raidModal-${interaction.user.id}')
    .setTitle(title);

  const actionRows: ActionRowBuilder<ModalActionRowComponentBuilder>[] = [];
  for (const component of components) {
    const actionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(component);
    actionRows.push(actionRow);
  }

  modal.addComponents(...actionRows);

  return interaction.showModal(modal);
}