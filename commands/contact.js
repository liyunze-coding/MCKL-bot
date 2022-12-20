const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('contact')
    .setDescription('contact details of MCKL'),
    category: 'About MCKL',
    async execute(client,interaction) {
        interaction.reply({embeds:[
            new MessageEmbed()
            .setTitle(`Contact Us`)
            .setColor('#2f3135')
            .addFields(
                { name: 'Kuala Lumpur Main Campus\nPhone', value: '+603-2274 1851 (General line)\n+603-2300 0998 (Course enquiry and registration)' },
                { name: 'Email', value: 'admission@mckl.edu.my' },
                { name: 'Opening hours', value: '9.00am - 5.00pm (Monday - Friday)\n9.00am - 4.00pm (Saturday)' }
            )
            .setThumbnail('https://media.discordapp.net/attachments/965897474453676092/967379468048023603/unknown.png')
        ], ephemeral:false})
    }
}