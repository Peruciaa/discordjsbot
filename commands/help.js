module.exports = {
    name: 'help',
    description: "Help for bot",
    execute(message, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#5DCCFB')
        .setTitle('Commands')
        .setDescription('This will display every bot commands.')
        .addFields(
            {name: 'Commands:', value: '`.ping` - tells client latency.\n`.uptime` - tells client uptime.'},
        )
        message.channel.send(newEmbed);
    },
};