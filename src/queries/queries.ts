export const messageForChannelQuerie = `query getMessagesForChannel($id: String!){
    messagesForChannel(channelID: $id) {
    id,
    content,
    authorID,
    dateTime
  }
}`

export const getMeQuerie = `query {
  me {
    id,
    name,
    profilePictureLocation
  }
}`