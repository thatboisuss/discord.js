const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NzM2NjMxNjM3NjMwMjU1MTY1.XxxnrA.tJUqS3xQolsZw8My7y0GBgGIoHI');
