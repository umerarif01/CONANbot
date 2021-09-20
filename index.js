//==========ImportantModules==========//
const { Client } = require('discord.js');
const bot = new Client({ disableMentions: 'everyone' });
require("dotenv").config();
bot.util = require('./util');
//==========ReadyEvent==========//
bot.on("ready", async() => {
        console.log(`${bot.user.username} is available now!`)
    })
    //==========ChatBot==========//
bot.on('message', (msg) => {
    if (msg.author.bot) return;
    if (msg.guild) {
        if (msg.content.startsWith(`<@${process.env.ID}>`) || msg.content.startsWith(`<@!${process.env.ID}`)) {
            bot.util.handleTalk(msg);
        }
    }
});
//==========Login==========//
bot.login(process.env.token);