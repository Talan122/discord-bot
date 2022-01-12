const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder().setName('addrole').setDescription('Adds a new role to the list of roles available in /roles.')
        .addRoleOption(option => option.setName('role').setDescription('The role to add to the list.').setRequired(true)),

    async execute(interaction) {
        const member = interaction.member;
        const permissions = member.permissions;

        if (!permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
            await interaction.reply({ content: 'You don\'t have permissions to do this!', ephemeral: false });
        } else {
            const roleIn = interaction.options.getRole('role');

            const toWrite = [];

            const rawdata = fs.readFileSync(__dirname + '\\roles.json');
            const roles = JSON.parse(rawdata);

            if (roles.roles.indexOf(roleIn)) {
                await interaction.reply('This role is already in the array!');
                return;
            }

            roles.roles.forEach((role) => {
                toWrite.push(role);
            });

            toWrite.push(roleIn.name);

            const data = { toWrite };
            const stringified = JSON.stringify(data);

            fs.writeFileSync(__dirname + '\\roles.json', stringified);

            await interaction.reply(`${roleIn} is now a role that can be used in \`/role\``);
        }
    }
}