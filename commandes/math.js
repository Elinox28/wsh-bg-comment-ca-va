const Discord = require('discord.js');
const math = require('mathjs')

module.exports = {
    name: 'math',
    run: async(client, message, args) => {
        try {
            message.channel.send(
                new Discord.MessageEmbed()
                .addField("Équation : ",`\`\`\`js\n${args.join(" ")}\`\`\``)
                .addField("Réponse : ",`\`\`\`js\n${math.evaluate(args.join(" "))}\`\`\``)
                .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
                .setColor("#07d4e5")
            );
        } catch (err) {
            message.channel.send("Votre équation mathématique n'est pas correcte.")
        }
    }
}