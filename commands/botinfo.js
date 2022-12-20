const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('get info about me!'),
    category: 'Info',
    async execute(client,interaction) {
        let cpc_discord= client.guilds.cache.get('824225028132175883');
        let serverCount = client.guilds.cache.size;
        let memberCount = cpc_discord.memberCount;

        interaction.reply({embeds:[
            new MessageEmbed()
            .setTitle('__Bot info__')
            .setColor(`#2f3135`)
            .setDescription(`★ Bot developer: **@ryan7#3090** (336488849217945600)
            ★ Developing since: **21/4/2022**
            ★ Sponsored by: **MCKL Computer Programming Club**
            ★ Hosted on: **Heroku**
            
            **THIS BOT IS NOT AFFILIATED WITH MCKL**
            This bot is made by an MCKL student, for MCKL students. For entertainment, information and moderation purposes.
            
            **All testing made in the Computer Programming Club Discord**`)
            .addField(`Members in my Discord`, memberCount.toString(), false)
            .addField('Servers I am in:', serverCount.toString(), false)
            .setImage('https://media.discordapp.net/attachments/965897474453676092/966917375536549908/13d5839ac2082f3b0bd8303ffdc642f6.png')
        ], ephemeral:false})
    }
}