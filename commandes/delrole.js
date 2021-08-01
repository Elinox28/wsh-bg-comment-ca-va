const Discord = require('discord.js')

module.exports = {
    name: 'delrole',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")

        const role = message.mentions.roles.first()

        if (!member) return message.channel.send("Merci d'indiquer le membre à qui enlever le rôle indiqué.")

        if (!role) return message.channel.send("Merci de mentionner le rôle à enlever.")

        await member.roles.remove(role)

        const embed = new Discord.MessageEmbed()
        .setDescription(`J'ai enlevé le rôle ${role}, à ${member}.`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    }
}