const Discord = require('discord.js')

module.exports = {
    name: 'pokemon',
    run: async (client, message, args) => {
        const nom = args.join(" ")

        const link = `https://i.some-random-api.ml/pokemon/${nom}.png`
        const lien = `https://www.pokemon.com/us/pokedex/${nom}`

        const embed = new Discord.MessageEmbed()
        .setTitle("Quelques informations utiles sur ce pokémon")
        .setDescription(`**Voici un __lien__ qui pourra vous être utile :\n${lien}\n\n__Image :__**`)
        .setImage(link)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    }
}