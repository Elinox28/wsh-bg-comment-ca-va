const Discord = require('discord.js')

module.exports = {
    name: 'text',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")
        const nom = args.slice(0).join(" ")

        if (!nom) return message.channel.send("Merci d'indiquer le nom du futur salon.")

        message.guild.channels.create(nom, { type: "text"})

        const embed = new Discord.MessageEmbed()
        .setTitle("<:luffy:866504382660476978> Salon créé avec succès")
        .setDescription(`Le salon a été crée avec succès\n\n\nVérifiez en haut de vos salons si vous voulez le déplacer dans une catégorie précise.`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    }
}