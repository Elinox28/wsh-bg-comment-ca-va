const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const distube = require('distube')
const db = require('quick.db')
const { GiveawaysManager } = require("discord-giveaways");
const { OWNER_ID } = require('./config.json').OWNER_ID
client.snipes = new Discord.Collection()

client.commands = new Discord.Collection()
client.distube = new distube(client, {
	leaveOnFinish: true,
	leaveOnEmpty: true,
	searchSongs: false,
	emitNewSongOnly: true,
	leaveOnStop: true,
	youtubeDL: true,
	updateYouTubeDL: true,
	youtubeCookie:
		"GPS=1; YSC=w5dGoHzqQRI; VISITOR_INFO1_LIVE=B4ElBqxSDv4; PREF=tz=Asia.Hong_Kong"
});


const prefix = ';'
client.giveaways = new GiveawaysManager(client, {
	storage : './giveaways.json',
	updateCountdownEvery: 5000,
	embedColor: "#07d4e5",
	reaction : "<:giveaway:862823125448523806>"
})
client.on('ready', () => {
    console.log('Je me suis connecté en tant que ' + client.user.username)

	const clientDetails = {
		Serveurs : client.guilds.cache.size,
		Utilisateur: client.users.cache.size,
		Salons: client.channels.cache.size
	}


	const express = require('express')

	const app = express()

	const port = 3000 || 3001;

	app.get("/", (req, res) => {
		res.status(200).send("🌟 Page Principale !")
	})

	app.get("/info", (req, res) => {
		res.status(200).send(clientDetails)
	});

	app.listen(port)
})

client.on("message", message => {
    const commandFiles = fs.readdirSync("./commandes").filter((file) => file.endsWith(".js"))

    for (const file of commandFiles) {
        const command = require(`./commandes/${file}`)

        client.commands.set(command.name, command)

    }
})


client.on('message', async message => {
	const xp = require('./commandes/xp')
	if (!message.guild) return;
	const prefix = process.env.prefix;
	xp(client, message)
	if (!message.content.startsWith(prefix) || message.author.bot) return;
  
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
  
  
	// if(!cmd) return;
	const cmd =
	  client.commands.get(command) ||
	  client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command));
	if (cmd) cmd.run(client, message, args);
	let customCommands = db.get(`guildConfigurations_${message.guild.id}.commands`)
	if (customCommands) {
	  let customCommandsName = customCommands.find(x => x.name === command)
	  if (customCommandsName) return message.channel.send(customCommandsName.response)
	}
})

client.on('guildCreate', (guild, message) => {
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
    const embed = new Discord.MessageEmbed()
    .setTitle(":pushpin: Ajout du bot One Piece")
    .setDescription(`Merci à <@${guild.ownerID}> d'avoir ajouté le bot.\n**:scroll: Nom du serveur :**\n ${guild.name}\n**:bar_chart: Nombre de membres :**\n${guild.memberCount}\n**📂 Identifiant du serveur :**\n${guild.id}\n**:crown: Owner :**\n<@${guild.ownerID}>\n**:map: Région :**\n${region[guild.region]}`)
    .setColor("#07d4e5")
    .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
    client.guilds.cache.get('859982216942714911').channels.cache.get("870513229896507452").send(embed)
})
const welcome = "870762184194555994"

client.on("guildMemberAdd", async member => {

	const { Welcomer } = require("canvacord");
	if (member.guild.id !== "859982216942714911") return;
	const welcomeCard = new Welcomer()
	.setUsername(member.user.username)
	.setDiscriminator(member.user.discriminator)
	.setAvatar(member.user.displayAvatarURL({format: "png"}))
	.setColor("title", "#0be8ee")
	.setColor("username-box", "#080809")
	.setColor("discriminator-box", "#080809")
	.setColor("message-box", "#1c09ea")
	.setColor("border", "#0f0f0f")
	.setColor("avatar", "#15eee8")
	.setBackground("https://cdn.discordapp.com/attachments/870513229896507452/871110539546345522/onepiece-episodes.png")
	.setMemberCount(member.guild.memberCount)
	let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
	member.guild.channels.cache.get("871110926563151933").send
	("`Bienvenue sur Wano Kuni !`" + member.user.toString(), attachment)
})

client.on("guildMemberRemove", async member => {

	const { Leaver } = require("canvacord");
	if (member.guild.id !== "859982216942714911") return;
	const welcomeCard = new Leaver()
	.setUsername(member.user.username)
	.setDiscriminator(member.user.discriminator)
	.setAvatar(member.user.displayAvatarURL({format: "png"}))
	.setColor("username-box", "#080809")
	.setColor("discriminator-box", "#080809")
	.setColor("border", "#0f0f0f")
	.setColor("avatar", "#15eee8")
	.setBackground("https://cdn.discordapp.com/attachments/871110926563151933/871119441616838686/One-Piece-Wano-Country-Featured.jpg")
	.setMemberCount(member.guild.memberCount)
	let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
	member.guild.channels.cache.get("871119530791960627").send
	("`Au revoir !`" + member.user.toString(), attachment)
})

client.on('presenceUpdate', async (oldPresence, newPresence) => {
    const role = newPresence.guild.roles.cache.get("871104443800768532");
    const member = newPresence.member
    const activities = member.user.presence.activities[0];
  
    if (activities && (activities.state.includes( ".gg/wano-kuni" ) || activities.state.includes("discord.gg/wano-kuni" ))) {
      return newPresence.member.roles.add(role)
    } else {
      if(member.roles.cache.get(role.id)) {
        newPresence.member.roles.remove(role)
      }
    }
})

client.on('guildDelete', (guild, message) => {
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
    const embed = new Discord.MessageEmbed()
    .setTitle(":pushpin: Bot One Piece enlevé d'un serveur")
    .setDescription(`Le bot a été enlevé de ${guild.name} par <@${guild.ownerID}>\n**:scroll: Nom du serveur :**\n ${guild.name}\n**:bar_chart: Nombre de membres :**\n${guild.memberCount}\n**📂 Identifiant du serveur :**\n${guild.id}\n**:crown: Owner :**\n<@${guild.ownerID}>\n**:map: Région :**\n${region[guild.region]}`)
    .setColor("#07d4e5")
    .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
    client.guilds.cache.get('859982216942714911').channels.cache.get("871156121048584192").send(embed)
})

client.on('message', message => {
	if (message.content === prefix + 'clearchannel') {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results)
      })
    }
}
  })

client.on('message', message => {
	if (message.content === ';servers'){
        let serverlist = ''
        client.guilds.cache.forEach((guild) => {
            serverlist = serverlist.concat(" - " + guild.name + ": Identifiant: " + guild.id + "\n")
        })
    
        const embed = new Discord.MessageEmbed()
        .setColor("#07d4e5")
        .setTitle("𝙑𝙤𝙞𝙘𝙞 𝙩𝙤𝙪𝙨 𝙡𝙚𝙨 𝙨𝙚𝙧𝙫𝙚𝙪𝙧𝙨 𝙤𝙪 𝙊𝙣𝙚 𝙋𝙞𝙚𝙘𝙚 𝙚𝙨𝙩.", '')
        .setDescription(serverlist)
		.setColor("#07d4e5")
        .setImage("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
        message.channel.send(embed);

}
})

client.on('message', message => {
    if (message.content === prefix + 'ping') {
        const embed = new Discord.MessageEmbed()
        .setDescription(`**Latence** \n${Date.now() - message.createdTimestamp} **ms**.\n\n **API**\n ${Math.round(client.ws.ping)} **ms**.`)
        .setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
      message.channel.send(embed);
    }
  });
  client.on('message', async message => {

    if (message.content == prefix + "invitations") {

        // Fetch all guild invites
        let invites = await message.guild.fetchInvites();

        // Get array of invites made by message author user
        const userInvites = invites.array().filter(e => e.inviter.id == message.author.id);

        // Make a var to save count of the user invites
        let inviteCount = 0;

        // Loop through each invite and add the uses of the invite to the "inviteCount" variable.
        userInvites.forEach(invite => inviteCount += invite.uses);

		const embed = new Discord.MessageEmbed()
		.setDescription(`Vous possédez **__${userInvites.length}__** liens d'invitation, **__${inviteCount}__** ont rejoint le serveur grâce à vos invitations.\n\n Vous possédez donc **__${inviteCount}__** invitations.`)
		.setColor("#07d4e5")
        .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed);

    }

});
client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase()

    try {
        client.commands.get(command).run(client, message, args)
    } catch (error) {
        console.log(error)
    }
})

client.status = queue =>
	`Volume: \`${queue.volume}%\` | Filter: \`${
		queue.filter || "Off"
	}\` | Loop: \`${
		queue.repeatMode
			? queue.repeatMode == 2
				? "All Queue"
				: "This Song"
			: "Off"
	}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

client.ws.on("INTERACTION_CREATE", async interaction => {
	if (!client.slcommands.has(interaction.data.name)) return;
	try {
		client.slcommands.get(interaction.data.name).execute(interaction);
	} catch (error) {
		console.log(
			`Error from command ${interaction.data.name} : ${error.message}`
		);
		console.log(`${error.stack}\n`);
		client.api.interactions(interaction.id, interaction.token).callback.post({
			data: {
				type: 4,
				data: {
					content: "Sorry, error occurred when running this command!"
				}
			}
		});
	}
});

client.distube
.on('playSong', (queue, song) =>
queue.textChannel.send(
	`Playing \`${song.name}\` - \`${
		song.formattedDuration
	}\`\nRequested by: ${song.user}\n${status(queue)}`,
))
	.on('addSong', (message, queue, song) =>
		message.channel.send(
			`J'ai ajouté ${song.name} - \`${song.formattedDuration}\` à la queue, cela a été demandé par ${song.user}`,
		))



client.login('')//Votre Token => Discord Develepor Portal => Applications => New Applicatiion => Bot => Build a bot => Token (COPY)

