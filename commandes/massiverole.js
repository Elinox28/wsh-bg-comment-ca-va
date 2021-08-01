const Discord = require('discord.js')

module.exports = {
    name: 'massiverole',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")

        const role = message.mentions.roles.first()

        if (!role) return message.channel.send("Merci de mentionner le rôle à attribuer.")

        message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(role))

        const embed = new Discord.MessageEmbed()
        .setDescription(`J'ai ajouté le rôle ${role} a tous les membres du serveur.`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    }
}