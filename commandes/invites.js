const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'topinvites',
    run: async(client, message, args) => {
        message.guild.fetchInvites().then((invites) => {
            const inviteCounter = {}


            invites.forEach((invite => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${inviter}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
             }))

             let replyText = new MessageEmbed()
             .setDescription(`<a:star:868962305721905172> **Classement d\'invitation pour __${message.guild.name}__**\n`)
             .setColor("#07d4e5")
             .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

             const sortedInvites = Object.keys(inviteCounter).sort((a, b) => inviteCounter[b] - inviteCounter[a])

             if (sortedInvites.length > 5) sortedInvites.length = 5
             else if(sortedInvites.length > 5) sortedInvites.length = sortedInvites.length


             for(const invite of sortedInvites) {
                 const count = inviteCounter[invite]
                 replyText.description += `\n**${invite} possède ${count} invitations.**`
             }
             message.channel.send(replyText)


        })
    }
}