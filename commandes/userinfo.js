const Discord = require("discord.js");
const moment = require("moment")
const db = require('quick.db')
module.exports = {
  name: "userinfo",
  run: async (client, message, args) => {
    const mention = message.mentions.members.first() || message.member;
    const roles = mention.roles.cache.get === "" ? "Aucun" : mention.roles.cache.get;
    const nick = mention.nickname === null ? "Aucun" : mention.nickname
    const usericon = mention.user.avatarURL;
    const game = mention.user.presence.game || "Aucune";
    const act = mention.user.presence.status.toUpperCase()

    var flags = {
        "": "**Aucun**",
        "DISCORD_EMPLOYEE": "<:staff:861089095648411659>",
        "DISCORD_PARTNER": "<:2_:861089097526018099>",
        "BUGHUNTER_LEVEL_1": "<:hunter2:861089496464359454>",
        "BUGHUNTER_LEVEL_2": "<:hunter_level_2:870413178771742730>",
        "HYPESQUAD_EVENTS": "<:chefhypesquad:861089095564787723>",
        "HOUSE_BRILLIANCE": "<:brilliance:861089095915798558>",
        "HOUSE_BRAVERY": "<:bravery:861089096007811143>",
        "HOUSE_BALANCE": "<:balance:861089095752613889>",
        "EARLY_SUPPORTER": "<:soutien:861089496485724160>",
        "VERIFIED_BOT": "<:bot2:870411029203517532>",
        "VERIFIED_DEVELOPER": "<:bot:861089095937687553>",
    };
    var bot = {
        "true": "Oui. <a:star:868962305721905172>",
        "false": "Non. <a:star:868962305721905172>"
    }
    var level = db.get(`guild_${message.guild.id}_level_${mention.id}`) || 0
    var xp = db.get(`guild_${message.guild.id}_xp_${mention.id}`) || 0
    var xpNeeded = level * 500 + 500

    const embed = new Discord.MessageEmbed()
    .setAuthor("Informations sur : " + mention.user.username, mention.user.avatarURL())
    .setDescription(`__Pseudonyme__ : **${mention.user.username}**\n __Tag__ : **#${mention.user.discriminator}**\n__Nickname__ : **${nick}**\n__Identifiant__ : **${mention.user.id}**\n__Rôles__ : **<@&${mention._roles.join("> <@&")}>**\n\n__Compte créé__ : **${moment(mention.user.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}**\n __À rejoint le serveur le__ : **${moment(mention.joinedAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}**\n__Statut__ : **${act}**\n__Badges__ : ${flags[mention.user.flags.toArray().join(", ")]}\n\n__Est-il un bot ?__ : **${bot[mention.user.bot]}**\n __Niveau sur le serveur__: **${level} || ${xp}/${xpNeeded}**`)
    .setThumbnail(usericon)
    .setThumbnail(mention.user.avatarURL())
    .setColor("#07d4e5")

    message.channel.send(embed)
  },
};