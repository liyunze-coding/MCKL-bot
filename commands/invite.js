const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('invite')
    .setDescription('get our server invite URL!'),
    category: 'Misc',
    async execute(client,interaction) {
        interaction.reply({embeds:[
            new MessageEmbed()
            .setTitle('Invite your MCKL friends to the server!')
            .setColor('#2f3135')
            .setDescription(`https://discord.gg/TevuqxE87J`)
        ], ephemeral:false})
    }
}