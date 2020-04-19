export const sendMessages = `
mutation sendMessage($channelID: String!, $content: String!) {
	sendMessage(channelID: $channelID, content: $content)
}
`

export const createGuildChannel = `
mutation newGuildChannel($guild: String!, $name: String!) {
	createGuildChannel(guildID: $guild, name: $name) {
	  name
  }
}
`