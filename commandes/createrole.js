const Discord = require('discord.js')
const toHex = require('colornames')

module.exports = {
    name: 'createrole',
    run: async(client, message, args) => {
      const member = message.mentions.members.first()

        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Tu n'as pas la permission d'utiliser cette commande.")
        const name = args.slice(1).join(' ')
        const regex = !/[^a-zA-Z0-9]+/g.test(name);

        if (!args[0]) return message.channel.send("Merci d'indiquer le nom de la couleur.")

        if(!name) return message.channel.send("Merci d'indiquer le nom du futur rôle.")

        message.guild.roles.create({
            data: {
              name: name,
              color: toHex(args[0]),
            },
          });

          const embed = new Discord.MessageEmbed()
          .setDescription("Le rôle " + "`" + name + "`" + " a été crée avec succès")
          .setColor("#07d4e5")
          .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)
    }
}