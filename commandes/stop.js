const Discord = require('discord.js')

module.exports = {
    name: 'stop',
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Vous n'êtes pas dans un salon vocal.")

        await client.distube.stop(message)
        await message.channel.send("J'ai arrêté la musique avec succès.")
    }
}