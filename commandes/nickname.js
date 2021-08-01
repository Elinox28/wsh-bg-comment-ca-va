const Discord = require('discord.js')

module.exports = {
    name: 'nickname',
    run: async (client, message, args) => {
        let nom = args.slice(1).join(" ")

        const member = message.mentions.members.first()

        if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('Tu n\'as pas la permission.')

        if(!member) return message.channel.send("Merci d'indiquer le membre à qui attribuer le nickname.")

        if(!nom) return message.channel.send("Merci d'indiquer le nickname.")

        member.setNickname(nom)

        const embed = new Discord.MessageEmbed()
        .setDescription(`${member} possède dès maintenant le nickname : ${nom}.`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    }
}