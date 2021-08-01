const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")

        if (!member) return message.channel.send("Merci de mentionner le membre à bannir.")
    
        const guild = message.guild;

        let reason = args.slice(1).join(" ")
        
        if (!reason) reason = "Non spécifié"

        const embed = new Discord.MessageEmbed()
        .setTitle("Utilisateur banni avec succès")
        .setDescription(`${member} a été banni avec succès\nRaison : ${reason}`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
        .setFooter(`Auteur du ban : ${message.author.tag}`)

        const embed2 = new Discord.MessageEmbed()
        .setTitle(`Vous avez été banni de ${guild.name}`)
        .setDescription(`Raison : ${reason}`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
        .setFooter(`Auteur du ban : ${message.author.tag}`)

        member.ban({reason: reason})

        member.send(embed2)

        message.channel.send(embed)
    }
}
