const backup = require("discord-backup");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "backup",
  run: async (client, message, args) => {
    let server = message.guild.id;
    const action = args[0];

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      const backupError = new MessageEmbed()
        .setDescription("Tu ne possèdes pas la permission.")
        .setColor("#36393F");
      return message.channel.send(backupError);
    }
    if (!action) {
      const backupActions = new MessageEmbed()
        .setDescription(
          "Voici l'ensemble des commandes backup : 1-`;backup create`\n2- `backup-load <ID>`"
        )
        .setColor("#36393F");
      return message.channel.send(backupActions);
    }

    if (action == "create") {
      try {
        const m = await message.channel.send(
          "<:3_:861819041131397180> En train de créer le backup.."
        );
        backup
          .create(message.guild, {
            jsonSave: true,
            jsonBeautify: true,
          })
          .then((backups) => {
            message.channel.send(
              `<:3_:861819041131397180> ${message.member}Le backup a été crée, aller vérifier dans vos messages privés.`
            );
            message.member.send(
              `<:3_:861819041131397180> Le backup pour le serveur : ${message.guild.name} a été crée avec succès. \n\n Identifiant: \`${backups.id}\` \n Pour load le backup quelque part, faites la commande ;backup load <Identifiant> dans un serveur ou je suis.`
            );
            m.delete();
          });
      } catch (err) {
        console.log(err);
        message.channel.send(
          "Il y a eu une erreur lors de la création du backup"
        );
      }
    }

    if (action == "load") {
      const Id = args[1];
      if(!Id) return message.channel.send('Veuillez spécifier l\'identifiant du backup, il devrait normalement être dans vos message privés avec moi.')
      if(isNaN(Id)) return message.channel.send('Identifiant de backup, réessayez avec le bon.')
    
      backup.load(Id, message.guild).then(backup.remove(args[1]));
    }
    
  },
};
