const Discord = require('discord.js')

module.exports = {
    name: "queue",
    run: async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Vous n'êtes pas dans un salon vocal.")

        const queue = client.distube.getQueue(message);

        await message.channel.send(
            new Discord.MessageEmbed()
            .setColor("#07d4e5")
            .setDescription(`Queue actuelle :\n${queue.songs.map((song, id) => `${id + 1} - \`${song.name}\` - \`${song.formattedDuration}\``).slice(0, 10).join(" \n")}\``))
    }
}