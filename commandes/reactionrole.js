const Discord = require('discord.js')

module.exports = {
    name: 'reactionrole',
    run: async (client, message, args) => {
        const salon = '871147526575751170'
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "🐱‍👤・Samourai")

        const yellowTeamEmoji = "✅"
        
        
        let embed = new Discord.MessageEmbed()
        .setAuthor("Vérification ", client.user.avatarURL())
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
        .setDescription(`Veuillez cliquer sur la réaction ci-dessous afin d'accéder à l'integralité du serveur.\n\n✅ ➜ <@&860270438987071528>`)
        .setFooter("© 2021 - " + client.user.username,)

        let messageEmbed = await message.channel.send(embed)
        messageEmbed.react(yellowTeamEmoji)
        

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch()
            if (reaction.partial) await reaction.fetch()
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == salon) {
                if (reaction.emoji.name == yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole)
                }
            } else {
                return;
            }
        })
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch()
            if (reaction.partial) await reaction.fetch()
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == salon) {
                if (reaction.emoji.name == yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole)
                }

            } else {
                return;
            }
        })
    }
}