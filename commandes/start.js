const ms = require('ms')
const { MessageEmbed, Client } = require('discord.js')

module.exports = {
    name: "start",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu ne possèdes pas la permission.")

        const channel = message.mentions.channels.first()
        if (!channel) return message.channel.send("Veuillez spécifier le salon")

        const duration = args[1];
        if (!duration) return message.channel.send("Veuillez spécifier une duration au giveaway")

        const winner = args[2]
        if (!winner) return message.channel.send("Veuillez spécifier un nombre de gagnants.")

        const prize = args.slice(3).join(" ")
        const config = require('../config.json');
        client.config = config;
        if (!prize) return message.channel.send("Merci de spécifier le prix.")
        const hostedBy = message.author
        client.giveaways.start(channel, {
            time : ms(duration),
            prize : prize,
            winnerCount : parseInt(winner),
            hostedBy : client.config.hostedBy ? message.author: null,
            messages: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : ''),
                giveawayEnd: (client.config.everyoneMention ? "@everyone\n\n" : ''),
            },
            timeRemaining: "Temps Restant **{duration}**",
            inviteToParticipate : "Réagissez avec <:giveaway:862823125448523806> afin de participer.",
            winMessage : "Félicitations {winner}, vous avez gagné {prize}",
            embedFooter : "Nouveau Giveaway.",
            noWinner : "Je n'ai pas pu déterminé un gagnant.",
            hostedBy: `${message.author}`,
            winners: "winners",
            endedAt : "Fini dans",
            units: {
                seconds: "secondes",
                minutes: "minutes",
                hours: "heures",
                days: "jours",
                plurals: false
            }
        })
        message.channel.send(`Le giveaway a commencé dans ${channel}`)
    }
}