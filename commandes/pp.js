const Discord = require('discord.js')

module.exports = {
    name: 'pp',
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.author;
        var réponse = [
            "**==:3**",
            "**===:3**",
            "**====:3**",
            "**=====:3**",
            "**======:3**",
            "**=======:3**",
            "**========:3**",
            "**=========:3**",
            "**==========:3**",
            "**===========:3**",
            "**============:3**",
            
            
        ];

        const embed = new Discord.MessageEmbed()
        .setDescription(réponse[Math.floor(Math.random() * réponse.length)])
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
        .setFooter("1 = correspond a 1 centimètre...")

        message.channel.send(embed)
    } 
}