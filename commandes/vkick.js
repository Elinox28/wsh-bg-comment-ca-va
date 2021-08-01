const Discord = require('discord.js')

module.exports = {
    name: 'vkick',
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission.")

        const member = message.mentions.members.first()
        if(!member) return message.channel.send("Veuillez spécifier le membre.")
        if (!member.voice.channel) return message.channel.send("Ce membre n'est pas dans un salon vocal.")

        if (!message.member.voice.channel) return message.channel.send("Veuillez rejoindre un salon vocal.")

        member.voice.kick(member.voice.channel)
        message.channel.send(`J'ai deconnecté ${member} de son salon vocal.`)
    }
}