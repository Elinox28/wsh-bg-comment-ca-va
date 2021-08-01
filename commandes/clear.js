const Discord = require('discord.js')

module.exports = {
    name: 'clear',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")
        const fetched = message.channel || message.mentions.members.first()
        let messagearray = message.content.split(" ");

        const amount = parseInt(args[0])

        if (isNaN(amount)) {return message.channel.send("Vous pouvez seulement supprimer un nombre de messages entre 1 et 99."
        );
    } else if (amount <= 1 || amount > 100) { 
        return message.channel.send("Vous pouvez seulement supprimer un nombre de messages entre 1 et 99.")
    }

    fetched.bulkDelete(amount, true)
    fetched.bulkDelete(amount)

    return message.channel.send(`J'ai effacé avec succès **${amount}** messages.`)
}
}