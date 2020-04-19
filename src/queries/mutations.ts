export const sendMessages = `
mutation sendMessage($channelID: String!, $content: String!) {
	sendMessage(channelID: $channelID, content: $content)
}
`