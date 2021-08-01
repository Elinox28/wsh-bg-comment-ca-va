const Discord = require('discord.js')

module.exports = {
    name: 'play',
    run: async (client, message, args, queue, song) => {
        if (!message.member.voice.channel) return message.channel.send("Vous n'êtes pas dans un salon vocal.")

        const music = args.join(" ")
        if (!music) return message.channel.send("Veuillez indiquer une musique à faire jouer.")
        await client.distube.play(message, music)
        await message.channel.send(
			`En train de jouer \`${song.name}\` - \`${
				song.formattedDuration
			}\`\nDemandé par: ${song.user}\n${status(queue)}`,
		)
    }
}