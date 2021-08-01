const Discord = require('discord.js')

module.exports = {
    name: 'add',
    run: async (client, message, args) => {
        if(message.channel.name.includes("📌・ticket・")) {
            const member = message.mentions.members.first()
            if (!member) return message.channel.send("Merci d'indiquer le membre à ajouter au ticket")
            try {
                message.channel.updateOverwrite(member.user, {
                    VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
                })
                    message.channel.send(`**__${member}__** a été ajouté au ticket.`)
            }
            catch(e) {
				return message.channel.send('Une erreur est survenue, merci de recommencer');
        }
    }
}
}