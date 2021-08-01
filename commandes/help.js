const Discord = require('discord.js')

module.exports = {
    name: "help",
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("<:luffy:866504382660476978> Voici l'ensemble de mes commandes")
        .setURL("https://discord.gg/kDKkKdZCAa")
        .setDescription("<:bot:861089095937687553>**・Owner ➜ 7**\n`setavatar, setstatus, setusername, djs, servers, blacklist, unblacklist`\n<:1_:861819041022869504>**・Modération ➜ 16**\n`addrole, ban, banlist, delrole, dm, kick, nickname, clear, unban, nuke, massiverole, delmassiverole, vmove, vkick, slowmode, clearchannel`\n<:musique:862884016093134848>**・Musique ➜ 6**\n`play, stop, loop, queue, pause, volume`\n<a:star:868962305721905172>**・Fun ➜ 21**\n`anime, tictactoe, math, pprandom, emojify, 8ball, gay, say, embed, clap, pokemon, slap, pp, flip, kill, clyde, triggered, wasted, wide, bloc, vapor`\n🔞**・NSFW ➜ 3**\n`hentai, ass, boobs`\n<:invites:870498889357230110>**・Invitations ➜ 2**\n`topinvites, invitations`\n<:giveaway:862823125448523806>**・Giveaways ➜ 3**\n`start, end, reroll`\n<:2_:861819041038860288>**・Informations ➜ 8**\n`help, invite, avatar, icone, ping, id, userinfo, serverinfo`\n<a:livre:868917644798087178> **/ <:chefhypesquad:861089095564787723>・Application + Niveau ➜ 2**\n`rank | apply`\n<:ticket:862541844557725707>**・Ticket ➜ 4**\n`ticket, close, add, remove`\n<:hunter2:861089496464359454>**・Utilités ➜ 10**\n`annonce, topic, deleterole, lock, unlock, delchannel, deleterole, text, voice, createrole`\n<:3_:861819041131397180>**・Backup ➜ 3**\n`backup, backup create, backup load`")
        .setColor("#07d4e5")
        .setImage("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")

        message.channel.send(embed)

    }
}