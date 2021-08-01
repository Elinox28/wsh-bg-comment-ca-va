const Discord = require('discord.js')

module.exports = {
    name: 'unlock',
    run: async (client, message, args) => {
        const member = message.mentions.members.first()

        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")
        message.channel.overwritePermissions([{
            id: message.guild.id,
            null: ["SEND_MESSAGES"]
        }])

        const embed = new Discord.MessageEmbed()
        .setDescription(`Le salon ${message.channel} a été unlock avec succès.`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    }
}