const Discord = require('discord.js')

module.exports = {
    name: "icone",
    run: async (client, message, args) => {

        const guild = message.guild;

        const embed = new Discord.MessageEmbed()
        .setTitle(`Voici l'icône de ${message.guild.name}`)
        .setDescription(`[**Clique ici pour avoir le __lien__ de l'icône**](${guild.iconURL({
            size: 2048,
            dynamic: true,
            format: "png",
        })})`)
        .setImage(guild.iconURL({
            size: 2048,
            dynamic: true,
            format: "png",
        }))
        .setColor("#07d4e5")

        message.channel.send(embed)

    }
}