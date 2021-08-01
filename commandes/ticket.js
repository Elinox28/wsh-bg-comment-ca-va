const Discord = require('discord.js')

module.exports = {
    name: 'ticket',
    run: async (client, message, args) => {

        const yellowTeamEmoji = "🎫"
        
        
        let embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setTitle("<:ticket:862541844557725707> Ouverture d'un ticket")
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
        .setDescription(`Veuillez cliquez sur la réaction : 🎫 afin d'ouvrir un ticket.`)
        .setFooter("© 2021 - " + client.user.username,)

        let messageEmbed = await message.channel.send(embed)
        messageEmbed.react(yellowTeamEmoji)
        

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch()
            if (reaction.partial) await reaction.fetch()
            if (user.bot) return;
            if (!reaction.message.guild) return;
            message.guild.channels.create(`📌・ticket・${message.author.id}`, {
                permissionOverwrites: [
                    {
                    id: message.author.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                }
            ],
            type: "text"
            }).then(async channel => {
                channel.send(`${message.author}, bienvenue dans votre ticket. Exécuter la commande \`;close\` afin de le refermer`);
            })

            
        })
    }
}
