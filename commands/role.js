const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder().setName('role').setDescription('Gives you a role!')
        .addStringOption(option =>
            option.setName('role_name')
                .setDescription('Role name')
                .setRequired(false)
        ),

    async execute(interaction) {
        const roleIn = interaction.options.getString('role_name'); 
        const member = interaction.member;
        let isValid = false;

        let rawdata = fs.readFileSync(__dirname + '\\roles.json');
        let validRoles = JSON.parse(rawdata).roles;

        validRoles.forEach((validRoles) => {
            if (roleIn == validRoles) {
                isValid = true;
            }
        });

        if (roleIn == null) {
            await interaction.reply({ content: `You did not provide a role! List of valid roles:\n\`${validRoles}\``, ephemeral: true});
        } else if (isValid == false) {
            await interaction.reply({ content: `You did not provide a valid role! List of valid roles:\n\`${validRoles}\``, ephemeral: true});
        }

        if (isValid == true) {
            const role = interaction.guild.roles.cache.find(r => r.name === roleIn);
    
            member.roles.add(role);

            await interaction.reply(`Gave you the \`${roleIn}\` role!`);
        }
    }
}