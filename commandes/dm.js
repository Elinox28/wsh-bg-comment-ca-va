module.exports = {
    name: "dm",
    run (client, message, args) {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("ADMINSTRATOR")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")
        const user = message.mentions.users.first()

        const contenu = args.slice(1).join(" ")

        message.delete()

        user.send(contenu)
    }
}