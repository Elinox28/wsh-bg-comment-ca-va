const Discord = require('discord.js')

module.exports = {
    name: 'topic',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")
        const nom = args.slice(1).join(" ")

        const salon = message.mentions.channels.first()

        if (!nom) return message.channel.send(`Merci d'indiquer le nom du futur topic du salon ${salon}.`)

        salon.setTopic(nom)

        const embed = new Discord.MessageEmbed()
        .setTitle("<:luffy:866504382660476978> Salon créé avec succès")
        .setDescription(`Le topic du salon ${salon} a été changé en : ${nom}`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    }
}