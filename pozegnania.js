const { EmbedBuilder } = require('discord.js');
const config = require('./config.json');

module.exports = async function pozegnanie(member) {
    const channel = member.guild.channels.cache.get(config.farewellChannelId);
    if (!channel) return;

    const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Do zobaczenia! <a:3124_cry:1375120201909010472>')
        .setDescription(`> <a:73288animatedarrowred:1375119792029306930> **${member.user.tag}** opuścił serwer.`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

    await channel.send({ embeds: [embed] });
};