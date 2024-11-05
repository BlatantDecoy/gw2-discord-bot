import { EmbedBuilder } from 'discord.js';

/**
 * Creates an embed message.
 *
 * @param {string} title - The title of the embed.
 * @param {string} description - The description of the embed.
 * @param {string} url - The URL of the embed.
 * @param {string} authorName - The name of the author of the embed.
 * @param {string} authorIconURL - The icon URL of the author of the embed.
 * @param {string} authorURL - The URL of the author of the embed.
 * @param {string} thumbnailURL - The URL of the thumbnail image of the embed.
 * @param {Array<{ name: string, value: string, inline?: boolean }>} fields - The fields of the embed.
 * @param {string} image - The URL of the image of the embed.
 * @returns {EmbedBuilder} The created embed message.
 */
export function createEmbedMessage(
  title: string,
  description: string,
  url: string,
  authorName: string,
  authorIconURL: string,
  authorURL: string,
  thumbnailURL: string,
  fields: Array<{ name: string, value: string, inline?: boolean }>,
  image: string
): EmbedBuilder {
  return new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(title)
    .setURL(url)
    .setAuthor({ name: authorName, iconURL: authorIconURL, url: authorURL })
    .setDescription(description)
    .setThumbnail(thumbnailURL)
    .addFields(...fields)
    .setImage(image)
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
}

/* import { MessageEmbed } from 'discord.js';
import { createEmbedMessage } from '../utils/createEmbedMessage';

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

channel.send({ embeds: [exampleEmbed] }); */