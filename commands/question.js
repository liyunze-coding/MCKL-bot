const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
let questions = [
    `What's the best piece of advice that you've been given?`,
    `Do you prefer online classes or attending school physically?`,
    `What is your most used emoji?`,
    `Who was your childhood actor/actress crush?`,
    `Have you ever been told you look like someone famous, who was it?`,
    `What is your favorite item you've bought this year?`,
    `What is your absolute dream job?`,
    `Say you're independently wealthy and don’t have to work, what would you do with your time?`,
    `If you had to delete all but 3 apps from your smartphone, which ones would you keep?`,
    `What does your favorite shirt look like?`,
    `What would your dream house be like?`,
    `As a child, what did you want to be when you grew up?`,
    `What was your favorite game to play as a child?`,
    `If you could hang out with any cartoon character, who would you choose and why?`,
    `If you could live in any country, where would you live?`,
    `If you could choose any two famous people to have dinner with who would they be?`,
    `Would you rather have invisibility or flight?`,
    `Would you rather always be slightly late or super early?`,
    `Would you rather be the funniest or smartest person in the room?`,
    `Do you play any sports?`,
    `Do you play any instruments?`,
    `What school subject is your least favorite?`,
    `What are you most excited about this year?`,
    `What is your best study tip?`,
    `What movie do you think everyone should watch?`,
    `Name an imaginary college class you wish this school offered.`,
    `What is one thing we would never guess about you?`,
    `What current fact about your life would most impress your five year old self?`,
    `Describe the best teacher you have had so far?`,
    `What most surprised you when you first arrived on campus or first started classes in MCKL?`,
    `Are you a morning person or a night person?`,
    `What's your favourite part about MCKL?`,
    `What do you do during lunch time in MCKL?`,
    `Do you go to Pit Stop often? If so, what do you usually do there?`,
    `What's the most awkward thing that happened to you in MCKL?`,
    `What's your favourite memory in MCKL so far?`,
    `Best book you’ve ever read?`,
    `What’s the best trip (traveling wise) you ever had?`,
    `What’s your favorite thing about the place where you live?`,
    `If you could live anywhere in the world for a year, where would it be?`,
    `Do you enjoy the outdoors? What’s your favorite outdoor activity?`,
    `In your opinion, what is the most beautiful place on earth?`,
    `What is your favorite animal?`,
    `What is your favorite hobby?`,
    `What is your favorite sport or physical activity?`,
    `What crazy activities do you dream of trying someday?`,
    `What is your favorite tv series?`,
    `What is your biggest pet peeve?`,
    `What are the best and worst purchases you’ve ever made?`,
    `What's one work-related skill that you’d like to develop, especially if you could do it easily?`,
    `What type of music do you listen to?`,
    `Pick your favorite decade and explain why?`,
    `What excuse do you use all the time?`,
    `Where are the best places to travel alone?`,
    `What skill do you think everyone should have?`,
    `What are the most ridiculous things you’ve bought?`,
    `What is the most useless talent you have?`,
    `Do you think computers will ever take over the world?`,
    `Is technology something to appreciate or fear?`,
    `If you could only use one piece of technology, what would it be?`,
    `What are your top three most used emoji in text?`,
    `Can you live without your smartphone for 24 hours?`,
    `From 1-10, how tech savvy are you?`,
    `What is your favorite technology brand?`,
    `What is your favorite way to waste time online?`,
    `If you have a time machine. When and where would you like to visit first?`,
    `If you have to delete all the apps but can keep a maximum of three, what apps would you keep?`,
    `If you could go back in time with the knowledge you currently have, what age would you choose, and why?`,
    `Do you prefer to be able to speak to animals or speak all languages?`,
    `Would you rather lose your sight or hearing?`,
    `What would you like to do when you retire?`,
    `What movie inspires you the most?`,
    `Love or career?`,
    `When was the last time you did something for the first time?`,
    `What’s your ideal date?`,
    `What are you most grateful for right now?`,
    `What is the most challenging aspect of your life right now?`,
    `Who influenced you the most when you were growing up?`,
    `If you could give a piece of advice to your younger self, what would it be?`,
    `What one thing would you change about our society?`,
    `Have you found the purpose of your life?`,
    `What motivates you in life?`,
    `What title would you give this chapter in your life?`,
    `If you can only eat one food for the rest of your life, what is it?`,
    `What is your least favorite food?`,
    `Coffee or tea?`,
    `Pizza or sushi?`,
    `Carbonara or Bolognese?`,
    `Name TV shows that you would recommend to everyone?`,
    `What did lockdown lifestyle teach you?`,
    `What are the interesting skills you want to learn?`,
    `If you could choose your own personality, would you like to be an introvert or extrovert?`,
    `What are your favorite team building activities?`,
    `Are you a listener or a talker?`,
    `What type of person do you love working with the most?`,
    `Which skill have you learned during quarantine?`,
    `Are you a planner or a spontaneous person?`,
    `What is the scariest thing you’ve ever done for fun?`,
    `Are you an early bird or night owl?`,
    `Are you a cat person or a dog person?`
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(questions);
let count = 0;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('question')
    .setDescription(`I'll ask a random question!`),
    category: 'Misc',
    async execute(client,interaction) {
        // if (interaction.member.id !== interaction.guild.ownerId){
        //     return interaction.reply({
        //         content: `Sorry you do not have permissions to use this command`,
        //         ephemeral:true
        //     })
        // }

        let question = questions[count];
        count++;

        if (count === questions.length){
            count = 0;
        }

        const embed = new MessageEmbed()
        .setColor(`#1cff00`)
        .setTitle('Question!')
        .setDescription(question);
        
        interaction.reply({embeds:[embed], ephemeral:false})
    }
}