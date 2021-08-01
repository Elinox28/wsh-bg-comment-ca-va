const Discord = require('discord.js')

module.exports = {
    name: 'wasted',
    run: async (client, message, args) => {
        const mention = message.mentions.members.first()
        if (!mention) return message.channel.send("Vous devez mentionner une personne afin d'exécuter la commande.")

        const avatar = mention.user.displayAvatarURL({ size: 512, format: "png" });

        await message.channel.send({
            files: [
            {
                attachment: `https://some-random-api.ml/canvas/wasted?avatar=${avatar}`,
                name: "file.jpg",
            }
            ]
        })

    }
}