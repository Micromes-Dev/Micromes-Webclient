export const messageForChannelQuerie = `
query getMessagesForNonGuildChannel($id: String!){
    messagesForChannel(channelID: $id) {
    id,
    content,
    authorID,
    dateTime
  }
}`

export const getMeQuerie = `
query {
  me {
    id,
    name,
    profilePictureLocation
  }
}`

export const guildsQuerie = `
query {
  guilds {
    name,
    id,
    iconLocation,
    owner {
      profilePictureLocation,
      name,
      id,
      status
    }
    channels {
      id,
      name
    },
    users {
      id,
      name,
      profilePictureLocation
    }
  }
}`

export const guildByIdQuerie = `
query getGuildById($id: String!){
  guild(guildID: $id){
    name,
    id,
    iconLocation,
    users{
      id,
      name,
      profilePictureLocation,
      status
    },
    ownerID,
    channels {
      id,
      name
    }
  }
}`

export const privateChannelsQuerie = ``