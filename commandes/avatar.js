const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    run: async (client, message, args) => {
        const membre = message.mentions.users.first() || message.author;  

        const embed = new Discord.MessageEmbed()
        .setTitle("Voici l'avatar de " + "`" + membre.username + '`')
        .setDescription(`[**Clique ici pour avoir le __lien__ de son avatar**](${membre.displayAvatarURL({
            size: 2048,
            dynamic: true,
            format: "png",
        })})`)
        .setImage(membre.displayAvatarURL({
            size: 2048,
            dynamic: true,
            format: "png",
        }))
        .setColor("#07d4e5")

        message.channel.send(embed)
    }
}