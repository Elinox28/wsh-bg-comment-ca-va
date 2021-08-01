const Discord = require('discord.js')

module.exports = {
    name: 'annonce',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("ADMINSTRATOR")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")

        const salonannonce = message.mentions.channels.first()

        const contenu = args.slice(1).join(" ")

        if (!salonannonce) return message.channel.send("Merci de mentionner le salon ou l'annonce aura lieu.")

        if (!contenu) return message.channel.send("Merci d'indiquer le contenu de l'annonce")

        salonannonce.send(contenu)
    }
}