const Discord = require('discord.js')

module.exports = {
    name: 'delchannel',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")
        const role = message.mentions.channels.first()

        if (!role) return message.channel.send("Merci d'indiquer le salon à supprimer.")

        role.delete()

        const embed = new Discord.MessageEmbed()
        .setDescription("Le salon mentionné a été supprimé avec succès.")
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)

    }
}