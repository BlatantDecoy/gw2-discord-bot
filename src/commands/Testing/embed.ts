import type {
    CommandData,
    SlashCommandProps,
    CommandOptions,
  } from 'commandkit';
import { createEmbedMessage } from '../../utils/createEmbedMessage';

const exampleEmbed = createEmbedMessage(
  'Some title',
  'Some description here',
  'https://discord.js.org/',
  'Some name',
  'https://i.imgur.com/AfFp7pu.png',
  'https://discord.js.org',
  'https://i.imgur.com/AfFp7pu.png',
  [
    { name: 'Regular field title', value: 'Some value here' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Inline field title', value: 'Some value here', inline: true },
    { name: 'Inline field title', value: 'Some value here', inline: true },
  ],
  'https://i.imgur.com/AfFp7pu.png'
);

export const data: CommandData = {
    name: 'embed',
    description: 'testing embed',
  };

export const run = ({ interaction }: SlashCommandProps) => {
    interaction.reply({ embeds: [exampleEmbed] });
  };