const { EmbedBuilder } = require('discord.js');

async function sendFarewell(member) {
  const channelId = '1375114457239388160'; 
  const channel = member.guild.channels.cache.get(channelId);
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor('#FF0000')
    .setTitle('Do zobaczenia! <a:3124_cry:1375120201909010472>')
    .setDescription(`> <a:73288animatedarrowred:1375119792029306930> **${member.user.tag}** opuścił nasz serwer. Może kiedyś wrócisz?!`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true })) // 👈 tu dodane
    .setTimestamp();

  await channel.send({ embeds: [embed] });
}

module.exports = sendFarewell;