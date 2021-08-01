const Discord = require('discord.js')

module.exports = {
    name: 'skip',
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Vous n'êtes pas dans un salon vocal.")

        await client.distube.skip(message)
        await message.channel.send("J'ai skip la musique avec succès.")
    }
}