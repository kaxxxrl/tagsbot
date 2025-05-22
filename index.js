const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const powitania = require('./powitania');
const pozegnania = require('./pozegnania');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages
    ]
});

client.once('ready', () => {
    console.log(`✅ Zalogowano jako ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
    powitania(member);
});

client.on('guildMemberRemove', member => {
    pozegnania(member);
});

client.login(process.env.TOKEN);