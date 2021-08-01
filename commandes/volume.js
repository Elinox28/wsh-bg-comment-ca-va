const Discord = require('discord.js')

module.exports = {
    name: 'volume',
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Vous n'êtes pas dans un salon vocal.")

        if (!args[0]) return message.channel.send("Veuillez indiquer le volume à changer.")

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send("Veuillez indiquer un volume valide, entre 1 et 100.")

        await client.distube.setVolume(message, parseInt(args[0]))

    }
}