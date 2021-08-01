const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    run: async(client, message, args) => {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")

        if (!member) return message.channel.send("Merci de mentionner le membre à bannir.")
    
        const guild = message.guild;

        let reason = args.slice(1).join(" ")
        
        if (!reason) reason = "Non spécifié"

        const embed = new Discord.MessageEmbed()
        .setTitle("Utilisateur kick avec succès")
        .setDescription(`${member} a été kick avec succès\nRaison : ${reason}`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
        .setFooter(`Auteur du kick : ${message.author.tag}`)

        const embed2 = new Discord.MessageEmbed()
        .setTitle(`Vous avez été kick de ${guild.name}`)
        .setDescription(`Raison : ${reason}`)
        .setColor("#07d4e5")
        .setThumbnail("https://i0.wp.com/steamuserimages-a.akamaihd.net/ugc/782986727573509219/F8C58F498002D25589ABE73352CB9CBDC3191E72/")
        .setFooter(`Auteur du kick : ${message.author.tag}`)

        member.kick({reason: reason})

        member.send(embed2)

        message.channel.send(embed)
    }
}