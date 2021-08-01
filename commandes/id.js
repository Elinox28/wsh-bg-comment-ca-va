const Discord = require('discord.js')

module.exports = {
    name: "id",
    run: async (client, message, args) => {
        var mention = message.guild.member(message.mentions.users.first()) || message.author;

        

        const embed = new Discord.MessageEmbed()
        .setDescription(`**Voici l'identifiant de __${mention}__ : __${mention.id}__**`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    }
}