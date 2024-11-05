import type {
  CommandData,
  SlashCommandProps,
  CommandOptions,
} from 'commandkit';
import { ApplicationCommandOptionType } from "discord.js";

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
                name: 'Start',
                value: 'start'
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
  interaction.reply('Pong!');
};

export const options: CommandOptions = {
  // https://commandkit.js.org/typedef/CommandOptions
};
