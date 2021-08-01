const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setDescription("**Lien d'invitation**\n[`Clique ici`](https://discord.com/api/oauth2/authorize?client_id=867142851980820491&permissions=8&scope=bot)\n\n**Lien d'assistance**\n[`Clique ici`](https://discord.gg/kDKkKdZCAa)")
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)

    }
}