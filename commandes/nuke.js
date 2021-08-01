const Discord = require('discord.js')

module.exports = {
    name: 'nuke',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")
        const salon = message.mentions.channels.first()

        if (!salon) return message.channel.send("Veuillez indiquer le salon à nuke.")

        salon.delete()
        salon.clone()
        

        return message.channel.send("Le salon a été nuke avec succès.")
}
}