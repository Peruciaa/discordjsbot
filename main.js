const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = "!"

client.commands = new Discord.Collection();

const fs = require('fs');
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == "uptime"){
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        
        message.channel.send(`This bot has been online for: ${days}d ${hours}h ${minutes}m ${seconds}s`)
    } else if (command == "ping"){
        message.channel.send(`Ping: ${Math.round(client.ws.ping)}ms`);
    } else if (command == "help"){
        client.commands.get('help').execute(message, Discord);
    }
});

client.login("BOT TOKEN");