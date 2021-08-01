const db = require('quick.db')
const OWNER_ID = require("../config.json").OWNER_ID;
module.exports = {
    name: 'blacklist',
    run: async (client, message, args) => {
        if (message.author.id != OWNER_ID) return message.channel.send("Vous n'êtes pas l'Owner du bot.")
        let user = await client.users.fetch(args[0]);
        if(!user) return message.channel.send(`ID / Membre invalide.`);
        
        let fetched = db.get(`blacklist_${user.id}`)
        
        if(!fetched) {
          db.set(`blacklist_${user.id}`, true)
          message.channel.send(`Blacklist avec succès.`);
        }else{ 
          return message.channel.send(`Ce membre est déjà blacklist.`);
        }
      }
    }