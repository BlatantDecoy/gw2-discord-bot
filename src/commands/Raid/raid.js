const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    /** @type {import('commandkit').CommandData}  */
    data: {
        name: 'raid',
        description: 'raid command description',
        options: [
            {
                name: 'choice',
                description: 'Start a raid',
                required: true,
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: 'Start',
                        value: 'start'
                    },
                    {
                        name: 'Stop',
                        value: 'stop'
                    },
                ],
            },
        ],
    },

    /**
     * @param {import('commandkit').SlashCommandProps} param0 
     */
    run: ({ interaction }) => {
        interaction.reply('Pong!');
    },

    /** @type {import('commandkit').CommandOptions} */
    options: {
        // https://commandkit.js.org/typedef/CommandOptions
    }
}