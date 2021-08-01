const { Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
    name: "apply",
    run: async (client, message, args) => {
        const appsChannel = message.mentions.channels.first()
        if (!appsChannel) return message.channel.send("Merci d'indiquer le salon ou les réponses vont être envoyés.")
        const questions = [
            "Quel âge possèdes-tu ?",
            "De quel genre es-tu ?",
            "De quel pays proviens-tu ?",
            "Quel est ta couleur préférée ?",
            "Quels sont tes passe-temps favoris ?",
            "Que fais-tu dans la vie ?",
        ]

        let collectCounter = 0
        let endCounter = 0

        const filter = (m) => m.author.id === message.author.id

        const appStart = await message.author.send(questions[collectCounter++])
        const channel = appStart.channel;

        const collector = channel.createMessageCollector(filter)

        collector.on("collect", () => {
            if (collectCounter < questions.length) {
                channel.send(questions[collectCounter++])
            } else {
                channel.send("Votre application a été envoyé avec succès.")
                collector.stop("fulfilled")
            }
        })
        collector.on("end", (collected, reason) => {
            if (reason === "fulfilled") {
                let index = 1;
                const mappedResponse = collected.map((msg) => {
                    return `${index++}) ${questions[endCounter++]}\n<a:pink:860281411672080414> ${msg.content}`
                })
                .join('\n\n')

                appsChannel.send(
                    new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
                    .setTitle("<a:star:868962305721905172> Nouvelle application")
                    .setDescription(mappedResponse)
                    .setColor("#07d4e5")
                    .setThumbnail("https://i.pinimg.com/originals/24/1a/54/241a54fecbaa171e38c864feb2178977.gif")
            )
        }})
    }
}