const { EmbedBuilder } = require('discord.js');
const config = require('./config.json');

module.exports = async function powitanie(member) {
    const channel = member.guild.channels.cache.get(config.welcomeChannelId);
    if (!channel) return;

    const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setTitle(`Witaj, ${member.user.username} <:3074woah:1375120178500599848>!`)
        .setDescription(`> <a:73288animatedarrowred:1375119792029306930> Dziękujemy że dołączyłeś na **${member.guild.name}**!\n**Nie zapomnij zobaczyć na kanał z tagami**!`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true })) // dodano miniaturkę
        .setTimestamp();

    channel.send({ content: `${member}!`, embeds: [embed] });
};
