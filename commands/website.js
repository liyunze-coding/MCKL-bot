const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('website')
    .setDescription('official website of MCKL'),
    category: 'About MCKL',
    async execute(client,interaction) {
        interaction.reply({embeds:[
            new MessageEmbed()
            .setTitle(`MCKL's official website`)
            .setColor('#2f3135')
            .setDescription(`[Click here to be redirected!](https://mckl.edu.my)`)
        ], ephemeral:false})
    }
}