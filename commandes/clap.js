module.exports = {
    name: 'clap',
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send("Merci d'indiquer le message à entourer de clap.")

        message.channel.send(args.join(" ").replace(/ /g, " 👏 "))
    }
}