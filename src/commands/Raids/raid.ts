import type {
  CommandData,
  SlashCommandProps,
  CommandOptions,
} from 'commandkit';
import { ApplicationCommandOptionType } from "discord.js";
import { raidNew } from '../../utils/raids/raid-new';
import { raidEnd } from '../../utils/raids/raid-end';
import { raidCancel } from '../../utils/raids/raid-cancel';

export const data: CommandData = {
  name: 'raid',
  description: 'raid desc',
  options: [
      {
        name: 'choice',
        description: 'choice desc',
        required: true,
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: 'New',
                value: 'new'
            },
            {
                name: 'End',
                value: 'end'
            },
            {
                name: 'Cancel',
                value: 'cancel'
            }
        ]
      }
  ]
};

export const run = ({ interaction }: SlashCommandProps) => {
  const choice = interaction.options.getString('choice');

  switch (choice) {
    case 'new':
      raidNew(interaction);
      break;
    case 'end':
      raidEnd(interaction);
      break;
    case 'cancel':
      raidCancel(interaction);
      break;
    default:
      interaction.reply('Invalid choice');
  }
};
