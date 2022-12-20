const { SlashCommandBuilder } = require('@discordjs/builders');
const { MembershipScreeningFieldType } = require('discord-api-types/v10');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('cohort')
    .setDescription('get your cohort role!')
    .addStringOption((option) => {
        return option
        .setName("cohort")
        .setDescription('Your cohort in MCKL')
        .setRequired(true)
    }),
    category: 'Role',
    async execute(client,interaction) {
        let user_cohort = interaction.options.getString('cohort');

        let cohort_year = user_cohort.slice(0,2);
        let cohort_month = user_cohort.slice(2,4);

        if (parseInt(cohort_year) <= 17){
            return interaction.reply({
                content: `invalid cohort, contact server admin if this error occurs`,
                ephemeral:true
            })
        } else if (![1,4,5,8].includes(parseInt(cohort_month))){
            return interaction.reply({
                content: `invalid cohort, contact server admin if this error occurs`,
                ephemeral:true
            })
        }
        
        let guild = interaction.guild;
        let member = guild.members.cache.get(interaction.user.id);

        member.roles.cache.map( rol => {
            if (rol.name.match(/^\d{4}$/)){
                member.roles.remove(rol);
            }
        })

        let role = guild.roles.cache.find(x => x.name === user_cohort);
        if (role == undefined){
            guild.roles.create({
                name: `${user_cohort}`,
                color: '#2f3135',
                reason: `for students from ${user_cohort} cohort`
            }).then( r => {
                let member = guild.members.cache.get(interaction.user.id);

                member.roles.add(r.id)
            })
            .catch(err => console.error(err))
        } else {
            member.roles.add(role.id)
        }
        
        interaction.reply({content:`assigned ${user_cohort} role!`, ephemeral:true})
    }
}