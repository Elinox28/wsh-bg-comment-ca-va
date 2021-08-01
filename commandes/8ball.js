const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    run: async (client, message, args) => {
        const contenu = args.slice(1).join(" ")

        if (!contenu) return message.channel.send("Merci d'indiquer la question auquel je dois répondre.")
        var réponse = [
            "🎱 Oui.",
            "🎱 Non.",
            "🎱 Jamais.",
            "🎱 Peut-être que oui, peut-être que non, qui sait.",
            "🎱 Certainement.",
            "🎱 Absolument.",
            "🎱 Il n'y a aucun doute possible.",
            "🎱 Mon petit doigt me dit oui.",
            "🎱 Ne rêve pas trop.",
            "🎱 Je ne pense pas.",
            "🎱 Non, mais c'est possible que oui, néanmoins les probalités que cela soit non sont haute, mais celles de oui aussi.",
            "🎱 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, je sais pas.",
            "🎱 Je préfère ne pas y répondre.",
            "🎱 Logique.",
            "🎱 Alors, **NON**.",
            "🎱 Intéressant mais je m'en fou complètement.",
        ];

        const embed = new Discord.MessageEmbed()
        .setDescription(réponse[Math.floor(Math.random() * réponse.length)])
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    } 
}