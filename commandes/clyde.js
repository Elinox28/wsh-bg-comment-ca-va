const Discord = require('discord.js')

module.exports = {
    name: 'clyde',
    run: async (client, message, args) => {
        const clydemessage = args.slice(0).join(" ")

        if (!clydemessage) return message.channel.send("Merci d'indiquer le message à faire prononcer à Clyde.")
        
        message.channel.send({ files: [{ attachment:`https://ctk-api.herokuapp.com/clyde/${clydemessage}`, name: "rip.png"}]});

    }
}