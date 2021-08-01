const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'slowmode',
    run: async (client, message, args) => {
        if (!message.member.hasPermission(('MANAGE_CHANNELS'))) {
            const slowmodeError = new MessageEmbed()
                .setDescription(`Tu n'as pas la permission.`)
                .setColor('#07d4e5')
            return message.channel.send(slowmodeError)
        }
        if (!args[0]) {
            const slowmodeError2 = new MessageEmbed()
                .setDescription(`Merci d'indiquer le temps.`)
                .setColor('#07d4e5')
            return message.channel.send(slowmodeError2)
        }
        const currentSlowmode = message.channel.rateLimitPerUser
        const reason = args[1] ? args.slice(1).join(" ") : 'Non spécifié'

        if (args[0] === 'off') {
            if (currentSlowmode === 0) {
                const slowmodeOfferror = new MessageEmbed()
                    .setDescription(`Le slowmode est déjà en off`)
                    .setColor('#07d4e5')
                return message.channel.send(slowmodeOfferror)
            }
            message.channel.setRateLimitPerUser(0, reason)
            const slowmodeOff = new MessageEmbed()
                .setDescription(`Slowmode desactivé`)
                .setColor('#07d4e5')
                .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

            return message.channel.send(slowmodeOff)
        }

        const time = ms(args[0]) / 1000
        const slowmodeError3 = new MessageEmbed()
            .setDescription(`Ce n'est pas un temps valide.`)
            .setColor('#07d4e5')
            .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
        if (isNaN(time)) {
            return message.channel.send(slowmodeError3)
        }

        if (time > 21600000) {
            const slowmodeError4 = new MessageEmbed()
                .setDescription(`Temps trop haut, vérifiez si le temps ne dépasse pas 6 heures.`)
                .setColor('#07d4e5')
                .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

            return message.channel.send(slowmodeError4)
        }

        if (currentSlowmode === time) {
            const slowmodeError5 = new MessageEmbed()
                .setDescription(`Le slowmode est déjà activé à ${args[0]}`)
                .setColor('#07d4e5')
                .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
            return message.channel.send(slowmodeError5)
        }
        
        let slowmode = await message.channel.setRateLimitPerUser(time, reason)
        let afterSlowmode = message.channel.rateLimitPerUser
        if(afterSlowmode > 0) {
            const embed = new MessageEmbed()
            .addField(`Slowmode activé. Durée :`, args[0])
            .addField(`Raison`, reason)
            .setColor('#07d4e5')
            .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
            
            return message.channel.send(embed)
        } else if(afterSlowmode === 0) {
            return message.channel.send(slowmodeError3)
        }
    }
    
}