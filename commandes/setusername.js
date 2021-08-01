const OWNER_ID = require("../config.json").OWNER_ID;

module.exports = {
  name: 'setusername',
  run: async (client, msg, args) => { 
        if (msg.author.id != OWNER_ID)
          return msg.channel.send(
            `Tu n'es pas l'Owner du bot.`
          );

          const content = args.join(" ")

    return await msg.client.user.setUsername(content)
      .then(() => msg.delete()).catch(console.error);
  }
};