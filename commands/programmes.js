const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('programmes')
    .setDescription('know more about programmes offered in MCKL!'),
    category: 'About MCKL',
    async execute(client,interaction) {
        interaction.reply({embeds:[
            new MessageEmbed()
            .setTitle('MCKL Programmes')
            .setColor('#2f3135')
            .setDescription(`Since 1983, MCKL has been providing holistic education to students from all walks of life. Our renowned professional pre-university and tertiary programmes are globally recognised and accredited by MQA!`)
            .setImage('https://media.discordapp.net/attachments/965897474453676092/967367158575267840/unknown.png?width=533&height=662')
            .addFields(
                { name: 'Pre-University', value: '[Cambridge A Level](https://mckl.edu.my/programme/cambridge-a-level/), [AUSMAT](https://mckl.edu.my/programme/australian-matriculation/)' },
                { name: 'Undergraduate Programme', value: '[ADTP](https://mckl.edu.my/programme/american-degree-transfer-program/), [Diploma](https://mckl.edu.my/programmes/#undergraduate-programme)' },
                { name: 'Professional Accounting', value: '[ACCA](https://mckl.edu.my/programme/acca-qualification/), [ACCA FIA](https://mckl.edu.my/programme/acca-foundation-in-accountancy/)' },
                { name: 'Professional Development', value: '[AWS, ICDL, Teaching & Learning](https://mckl.edu.my/programmes/#professional-development)'},
                { name: 'Prepatory Course', value: '[FLY](https://mckl.edu.my/programme/future-learning-for-youth-fly/) and Prepatory for [A Level](https://mckl.edu.my/programme/cambridge-a-level-preparatory-prepcal-programme/), [AUSMAT](https://mckl.edu.my/programme/australian-matriculation-preparatory-programme/)'}
            )
        ], ephemeral:false})
    }
}