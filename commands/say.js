const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('say').setDescription('Makes the bot say whatever you want!')
        .addStringOption(option => option.setName('input').setDescription("What the bot will say")),

    async execute(interaction) {
        const input = interaction.options.getString('input');

        await interaction.reply(input);
    }
}