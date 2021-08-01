const OWNER_ID = require("../config.json").OWNER_ID;

module.exports = {
  name: 'setavatar',
  run: async (client, msg, [url]) => { 
        if (msg.author.id != OWNER_ID)
          return msg.channel.send(
            `Tu n'es pas l'Owner du bot.`
          );

    return await msg.client.user.setAvatar(url)
      .then().catch(console.error);
      
  }
};