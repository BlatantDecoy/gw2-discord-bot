import type { ValidationProps } from 'commandkit';

export default function ({ interaction, commandObj, handler }: ValidationProps) {
    const roleName = commandObj.options.role;

    if (!interaction.member?.roles.cache.some(r => r.name === roleName)) {
        interaction.reply({
            content: "You don't have the required role to use this command.",
            ephemeral: true,
        });

        return true; // This is important
    }
};