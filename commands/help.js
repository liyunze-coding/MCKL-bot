const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('commands for the MCKL bot')
    .addStringOption(option => {
        return option
        .setName("command")
        .setDescription('specific command')
        .setRequired(false)
    }),
    category: 'Info',
    async execute(client,interaction) {
        let user_command = interaction.options.getString('command');
        const embed = new MessageEmbed()
            .setColor('#2f3135')
            .setTitle('MCKL bot help')
            .setThumbnail('https://images-ext-1.discordapp.net/external/FarNY0atIvzjKb8Yd9aksO124DOL2_icyhDeg_Qb5ZQ/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/966551450912161852/6b9a33dd86707bff88597c6731195cb8.png?width=663&height=663');
        
        let description = '';
        if (!user_command){
            // if command isn't specified
            
            let category_commands = {};

            client.commands.map(cmd => {
                let category = cmd.category;
                if (!category) category = 'other';
                category = category[0].toUpperCase() + category.slice(1);

                if (!category_commands[category]){
                    category_commands[category] = [cmd.data.name];
                } else {
                    category_commands[category].push(cmd.data.name)
                }
            })

            for (c of Object.keys(category_commands)){
                description += `**${c}**\n- ${category_commands[c].join('\n- ')}\n\n`
            }

            embed.setDescription(description);
            interaction.reply({embeds:[embed], ephemeral:false})
        } else {
            // if command is specified
            let command = client.commands.get(user_command);
            if (!command){
                return interaction.reply({content:`Can't find specified command`, ephemeral:true});
            }

            description += `Command: \`${command.data.name}\`\nCategory: \`${command.category}\`\n\n`;
            description += `Description: \`${command.data.description}\``;

            embed.setDescription(description);
            interaction.reply({embeds:[embed], ephemeral:false})
        }
    }
}