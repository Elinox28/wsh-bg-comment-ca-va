const Discord = require('discord.js')

module.exports = {
    name: 'gay',
    run: async (client, message, args) => {
            var réponse = [
            "📊 Cet être humain est malheureusement gay à 3%",
            "📊 Cet être humain est malheureusement gay à 6%",
            "📊 Cet être humain est malheureusement gay à 9%",
            "📊 Cet être humain est malheureusement gay à 12%",
            "📊 Cet être humain est malheureusement gay à 15%",
            "📊 Cet être humain est malheureusement gay à 18%",
            "📊 Cet être humain est malheureusement gay à 21%",
            "📊 Cet être humain est malheureusement gay à 24%",
            "📊 Cet être humain est malheureusement gay à 27%",
            "📊 Cet être humain est malheureusement gay à 30%",
            "📊 Cet être humain est malheureusement gay à 33%",
            "📊 Cet être humain est malheureusement gay à 36%",
            "📊 Cet être humain est malheureusement gay à 39%",
            "📊 Cet être humain est malheureusement gay à 42%",
            "📊 Cet être humain est malheureusement gay à 45%",
            "📊 Cet être humain est malheureusement gay à 48%",
            "📊 Cet être humain est malheureusement gay à 51%",
            "📊 Cet être humain est malheureusement gay à 54%",
            "📊 Cet être humain est malheureusement gay à 57%",
            "📊 Cet être humain est malheureusement gay à 60%",
            "📊 Cet être humain est malheureusement gay à 63%",
            "📊 Cet être humain est malheureusement gay à 66%",
            "📊 Cet être humain est malheureusement gay à 69%",
            "📊 Cet être humain est malheureusement gay à 72%",
            "📊 Cet être humain est malheureusement gay à 75%",
            "📊 Cet être humain est malheureusement gay à 78%",
            "📊 Cet être humain est malheureusement gay à 81%",
            "📊 Cet être humain est malheureusement gay à 84%",
            "📊 Cet être humain est malheureusement gay à 87%",
            "📊 Cet être humain est malheureusement gay à 90%",
            "📊 Cet être humain est malheureusement gay à 93%",
            "📊 Cet être humain est malheureusement gay à 96%",
            "📊 Cet être humain est malheureusement gay à 99%",
            "📊 Cet être humain est malheureusement gay à 100%",
        ];

        const embed = new Discord.MessageEmbed()
        .setDescription(réponse[Math.floor(Math.random() * réponse.length)])
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    } 
}