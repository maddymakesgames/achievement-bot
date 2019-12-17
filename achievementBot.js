const discord = require('discord.js');
const client = new discord.Client();
const config = require('./config.json');

client.on('message', async (msg) => {
    if(msg.author.bot || !msg.content.startsWith('mc!')) return;
    
    let cmd = msg.content.split('mc!')[1].trim();
    
    if(cmd.startsWith('achievement') || cmd.startsWith('a')) {
        let args = cmd.match(/[\w.!?\\-]+|"[^"]+"/g);
		args.shift();
		let item = Math.floor((Math.random())*39);
		console.log(item)
		msg.channel.send({files:[{attachment:`https://minecraftskinstealer.com/achievement/${encodeURI(`${args[2] ? args[2].replace(/"/g, '') : item}/${args.length > 1 ? args[0].replace(/"/g, '') : 'Achievement Get!'}/${args.length > 1 ? args[1].replace(/"/g, '') : args[0].replace(/"/g, '')}`)}`, name:'file.png'}]});
    }
})

client.login(config.token);