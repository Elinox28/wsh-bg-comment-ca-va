const OWNER_ID = require("../config.json").OWNER_ID;

module.exports = {
  name: 'setstatus',
  run: async (client, msg, args) => { 
        if (msg.author.id != OWNER_ID)
          return msg.channel.send(
            `Tu n'es pas l'Owner du bot.`
          );

          const content = args.slice(1).join(" ")

        if (args[0] != "STREAMING" || "PLAYING" || "LISTENING" || "WATCHING")

    return await msg.client.user.setPresence({
        activity: {
        name: content,
        type: args[0],
        url: "https://www.twitch.tv/izawa_le_chomeur"
    }
    })
      .then().catch(console.error);
  }
};