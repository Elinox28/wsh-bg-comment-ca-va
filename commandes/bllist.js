const db = require('quick.db')
const OWNER_ID = require("../config.json").OWNER_ID;
const Discord = require('discord.js')
module.exports = {
    name: 'bllist',
    run: async (client, message, args) => {
        if (message.author.id != OWNER_ID) return message.channel.send("Vous n'êtes pas l'Owner du bot.")
        let user = await client.users.fetch(args[0]);
        
        const embed = Discord.MessageEmbed()
        .setDescription(`Voici tous les membres blacklist.\n\n` + db.get(`blacklist_users`))

        message.channel.send(embed)
      }
    }