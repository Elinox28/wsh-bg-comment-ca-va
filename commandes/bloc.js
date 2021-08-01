const Discord = require('discord.js')

module.exports = {
    name: "bloc",
    run: async (client, message, args) => {
        const text = args.join(" ")
        if (!text) return message.channel.send("Merci d'indiquer du texte, à mettre sous forme de bloc orange.")

        message.channel.send(`\`\`\`fix\n${text}\n\`\`\``)
    }
}