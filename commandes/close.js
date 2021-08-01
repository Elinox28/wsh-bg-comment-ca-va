const Discord = require('discord.js')

module.exports = {
    name: 'close',
    run: async (client, message, args) => {
        if(message.channel.name.includes('📌・ticket・')) {
			message.channel.delete();
        }
    }
}