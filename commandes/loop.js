const Discord = require('discord.js')

module.exports = {
    name: 'loop',
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Vous n'êtes pas dans un salon vocal.")

        await client.distube.setRepeatMode(message, parseInt(args[0]))
        await message.channel.send("J'ai commencé à loop la musique actuelle.")
    }
}