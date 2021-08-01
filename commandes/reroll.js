const Discord = require('discord.js')
const ms = require("ms")

module.exports = {
    name: 'reroll',
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu ne possèdes pas la permission.")
        if (!args[0]) return message.channel.send("Veuillez spécifier l'ID du giveaway")

        const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args[0])
        if (!giveaway) return message.channel.send("Giveaway pas trouvé.")

        client.giveaways.reroll(giveaway.messageID, {
        }).then(() => {
            message.channel.send(`Le giveaway a été reroll.`)
        })
        .catch(err => {
            console.log(err)
            message.channel.send(`Une erreur est survenue.`)
        })
    }
}
