const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('minecraft')
    .setDescription('get the video of MCKL in Minecraft!'),
    category: 'Misc',
    async execute(client,interaction) {
        interaction.reply({embeds:[
            new MessageEmbed()
            .setTitle('MCKL in Minecraft')
            .setColor('#2f3135')
            .setDescription(`[Watch the video here on Youtube!](https://youtu.be/hRPidUUUlrk)`)
            .setImage('https://media.discordapp.net/attachments/965897474453676092/966909919632703538/hq720.jpg')
        ], ephemeral:false})
    }
}