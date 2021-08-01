var superagent = require('superagent');
const Discord = require('discord.js')

module.exports = {
    name: "ass",
    run: async (client, message, args) => {
        var errmessage = "Ce salon n'est pas un salon **NSFW**. 🔞"
        if (!message.channel.nsfw)  return message.channel.send(errmessage)

        var lo = new Discord.MessageEmbed()
                .setDescription(`Merci d'attendre quelques secondes...`)
                .setColor("#07d4e5")

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'ass'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`**C'est cadeau... 🔞**`)
                .setColor("#07d4e5")
                .setImage(response.body.message)
            
            m.edit(embed_nsfw);
        });
    });
}
}