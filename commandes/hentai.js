const Discord = require('discord.js')
const got = require('got')

module.exports = {
    name: "hentai",
    run: async (client, message, args) => {
        var errmessage = "Ce salon n'est pas un salon **NSFW**. 🔞"
        if (!message.channel.nsfw)  return message.channel.send(errmessage)

        got("https://www.reddit.com/r/hentai/random.json")
        .then((response) => {
          let content = JSON.parse(response.body);
          var title = content[0].data.children[0].data.title;
          var amazeme = content[0].data.children[0].data.url;
          const oof = new Discord.MessageEmbed()
          .setTitle(`**${title}**`)
          .setImage(amazeme)
          .setColor("#07d4e5")

        message.channel.send(oof)
        })
    }
}