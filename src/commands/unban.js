module.exports = {
	name: 'pardon',
	description: 'Unban Command',
	execute(message, args) {
		const user1 = message.mentions.users.first();
		const Discord = require('discord.js');
		const member = message.mentions.members.first();
		const reason = args.slice(2).join(' ');
		const embed = new Discord.MessageEmbed()
			.setColor('ff0000')
			.setTitle(`${user1.tag} was pardoned.`)
			.setTimestamp();
		message.channel.send(embed);

		message.guild.members.unban(`${member}`, `${reason}`);
	},
};
