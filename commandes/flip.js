const { MessageEmbed } = require('discord.js')
const flip = require("flip-text")

module.exports = {
    name: 'flip',
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send("Merci d'indiquer le message à flip.")

        args.reverse()
        var flipped = [];

        args.forEach((arg) => {
            flipped.push(flip(arg));
        })

        message.channel.send(flipped.join(" "))
    }
}