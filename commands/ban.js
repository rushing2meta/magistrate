module.exports = {
    name: 'ban',
    description: 'Ban Command',
    async run(message, args) {

      const embed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle(`${mentionedMember.tag} just got fucking demolished.`)
        .setTimestamp()

      if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`You don't have permission to do that, retard ${mention.author}`);
      if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I lack permission to do that, sperg.');

      const reason = args.slice(1).join(' ');
      const mentionedMember = message.members.first();

      if (!reason) reason = 'No reason given.'
      if (!args[0]) return message.channel.send('Try again, brainlet.');
      if (!mentionedMember) return message.channel.send('Guess he dipped.');
      if (mentionedMember.bannable) return message.channel.send('User cannot be banned.');

      const banEmbed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle(`${mentionedMember.tag} You have been banned from LGBTQ+ Debate.`)
        .setTimestamp()
        message.channel.send(embed);

      await mentionedMember.ban({
        reason: reason
      }).catch(err => console.log(err)).then(() => message.channel.send(embed));
    }
}
