module.exports = {
    name: 'say',
    run (client, message, args) {
        const messageàdire = args.slice(0).join(" ")

        message.delete()

        message.channel.send(messageàdire)
    }
}