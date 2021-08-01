const Commando = require('discord.js-commando')
const axios = require('axios')
const OWNER_ID = require("../config.json").OWNER_ID;
module.exports = {
    name: 'djs',
    run: async (client, message, args) => {
        if (message.author.id != OWNER_ID)
          return message.channel.send(
            `Tu n'es pas l'Owner du bot.`
          );
        const uri = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(args)}`

        axios.get(uri).then((embed) => {
            const { data } = embed

            if (data && !data.error) {
                message.channel.send({ embed: data })
            } else {
                message.reply(`J'ai rien trouvé pour cette documentation.`)
            }
        })
        .catch ((err) => {
            console.log(err)
        })
    }
}