const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setDescription("test command").setName("test"),

    async execute(interaction) {
        await interaction.reply('AAAAAAAAAAA');
    }
}