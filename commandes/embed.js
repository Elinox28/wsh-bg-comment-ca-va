const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'embed',
    run: async (client, message, args) => {
        const messageàdire = args.join(" ")

        const embed = new MessageEmbed()
        .setDescription(messageàdire)
        .setColor("RANDOM")

        message.channel.send(embed)
    }
}