const Discord = require('discord.js')

module.exports = {
    name: 'banlist',
    run: async (client, message, args) => {
        const mention = message.mentions.members.first() || message.member;
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")

        const fetchBans = message.guild.fetchBans()
        const bannedMembers = (await fetchBans).map((member) => "`" + member.user.tag + "`").join("\n")

        const embed = new Discord.MessageEmbed()
        .setAuthor(`Voici tous les membres bannis de ${message.guild.name}`, mention.user.avatarURL())
        .setDescription(bannedMembers)
        .setColor("#07d4e5")
          .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    }
}