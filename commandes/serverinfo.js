const Discord = require('discord.js')
const moment = require('moment')
module.exports = {
    name: 'serverinfo',
    run: async (client, message, args) => {
        let region = {
            brazil: "Brésil",
		"eu-central": "Europe Centrale",
		singapore: "Singapoure",
		"us-central": "États-Unis Centrale",
		sydney: "Sydney",
		"us-east": "États-Unis Est",
		"us-south": "États-Unis Sud",
		"us-west": "États-Unis Ouest",
		"eu-west": "Europe de l'Ouest",
		"vip-us-east": "États-Unis Est V.I.P",
		london: "London",
		amsterdam: "Amsterdam",
		hongkong: "Hong Kong",
		russia: "Russie",
		southafrica: "Afrique du sud",
		india: "Inde",
        };

        let verifLevels = {
            "NONE": "Aucun",
            "LOW": "Faible",
            "MEDIUM": "Moyen",
            "HIGH": "(╯°□°）╯︵  ┻━┻ (Haut)",
            "VERY_HIGH": "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻ (Très haut)"
        };

        const mention = message.mentions.users.first() || message.member

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL())
        .setThumbnail(message.guild.iconURL())
        .setColor("#07d4e5")
        .setDescription(`__Owner__ : <@${message.guild.ownerID}> <a:star:868962305721905172>\n__Région__ : **${region[message.guild.region]}**\n__Niveau de vérification__ : **${verifLevels[message.guild.verificationLevel]}**\n\n__Nombre total de salons :__ **${message.guild.channels.cache.size}**\n __Nombre de salons écrits__ : **${message.guild.channels.cache.filter((c) => c.type === "text").size}**\n __Nombre de salons vocaux__ : **${message.guild.channels.cache.filter((c) => c.type === "voice").size}**\n\n__Créé le__ : **${moment(message.guild.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}**\n__Vous avez rejoint ce serveur le__ : **${moment(mention.joinedAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}**\n\n__Nombre de membres :__ **${message.guild.memberCount}**\n__Nombre d'humains :__ **${message.guild.members.cache.filter(member => !member.user.bot).size}**\n__Nombre de robots :__ **${message.guild.members.cache.filter(member => member.user.bot).size}**`)

        message.channel.send(embed)
    }
}