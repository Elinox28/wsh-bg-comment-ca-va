const fetch = require('node-fetch');
const Discord = require('discord.js')

module.exports = {
    name: "boobs",
    run: async (client, message, args) => {
        var errmessage = "Ce salon n'est pas un salon **NSFW**. 🔞"
        if (!message.channel.nsfw)  return message.channel.send(errmessage)

        

        const res = await fetch(`https://nekobot.xyz/api/image?type=boobs`);
      const img = (await res.json()).message;
      const embed = new Discord.MessageEmbed()
      .setDescription("Petit cadeau ...")
      .setColor("#07d4e5")
      .setImage("attachment://trumptweet.png")
      .attachFiles([{ attachment: img, name: "trumptweet.png" }])

      message.channel.send(embed)
}
}