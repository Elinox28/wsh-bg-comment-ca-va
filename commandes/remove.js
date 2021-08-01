const Discord = require('discord.js')

module.exports = {
    name: 'remove',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")
        if(message.channel.name.includes("📌・ticket・")) {
            const member = message.mentions.members.first()
            if (!member) return message.channel.send("Merci d'indiquer le membre à remove au ticket")
            try {
                message.channel.updateOverwrite(member.user, {
                    VIEW_CHANNEL: false,
					SEND_MESSAGES: false,
					ATTACH_FILES: false,
					READ_MESSAGE_HISTORY: false,
                })
                    message.channel.send(`**__${member}__** a été remove au ticket.`)
            }
            catch(e) {
				return message.channel.send('Une erreur est survenue, merci de recommencer');
        }
    }
}
}