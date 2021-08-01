const Discord = require('discord.js')
const ms = require("ms")

module.exports = {
    name: 'end',
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu ne possèdes pas la permission.")
        if (!args[0]) return message.channel.send("Veuillez spécifier l'ID du giveaway")

        const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args.join(" "))
        if (!giveaway) return message.channel.send("Giveaway pas trouvé.")

        client.giveaways.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        }).then(() => {
            message.channel.send(`Le giveaway va se terminer dans moins de ${client.giveaways.options.updateCountdownEvery / 1000} secondes..`)
        })
        .catch(err => {
            console.log(err)
            message.channel.send(`Une erreur est survenue.`)
        })
    }
}
