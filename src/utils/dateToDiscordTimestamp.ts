/**
 * Converts a date to a Discord timestamp.
 *
 * @param {Date} date - The date to convert.
 * @param {string} [timeStampStyle=null] - The timestamp style (e.g. "R", "F", etc.).
 * @returns {string} The Discord timestamp string.
 */
function dateToDiscordTimestamp(date: Date, timeStampStyle?: string): string {
  return `<t:${(date.getTime() / 1000).toFixed(0)}${timeStampStyle ? ':' + timeStampStyle : ''}>`;
}

export { dateToDiscordTimestamp };