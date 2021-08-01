const { MessageEmbed, Message } = require("discord.js")

const userReg = RegExp(/<@!?(\d+)>/)

module.exports = {
    name: 'unban',
    description: "Unbans a previously banned member",
    run: async(client, message, args) => {
        const userID = userReg.test(args[0]) ? userReg.exec(args[0])[1] : [0]
        const mentionedUser = await message.client.users.fetch(userID).catch(() => null)

        if(!message.member.hasPermission('BAN_MEMBERS')) {
            const unbanerror = new MessageEmbed()
            .setDescription("Tu n'as pas la permission.")
            .setColor('#36393F')
            .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

            return message.channel.send(unbanerror)
        } else if(!message.guild.me.hasPermission('BAN_MEMBERS')) {
            const unbanerror2 = new MessageEmbed()
            .setDescription("Je n'as pas la permission.")
            .setColor('#36393F')
            .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

            return message.channel.send(unbanerror2)
        } else if(!mentionedUser) {
            const unbanerror3 = new MessageEmbed()
            .setDescription("Merci de mentionner le membre à unban. (En prennant son Identifiant, faites `;unban <@SON_IDENTIFIANT>`")
            .setColor('#36393F')
            .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

            return message.channel.send(unbanerror3)
        }

        const allBans = await message.guild.fetchBans()
        const bannedUser = allBans.get(mentionedUser.id)

        if(!bannedUser) {
            const unbanerr = new MessageEmbed()
            .setDescription("Ce membre n'est pas banni.")
            .setColor('#36393F')
            .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")  
            
            return message.channel.send(unbanerr)
        }

        const reason = args.slice(1).join(' ')

        message.guild.members.unban(mentionedUser.id, [reason]).catch(err => console.log(err))

        const unbanSuccess = new MessageEmbed()
        .setDescription(`J'ai unbanni ${mentionedUser} ${reason ? `pour raison :**${reason}**` : ''}`)
        .setColor('#07d4e5')
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")


        message.channel.send(unbanSuccess)


    }
}