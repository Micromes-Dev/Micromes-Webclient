export interface Entity{
  id: string
}

//#region messages
export interface ChannelContent extends Entity{
  content: string
}

export interface Message extends Entity{
  content: string
  dateTime: string
  authorID: string
}
//#endregion

//#region Channels
export interface Channel extends Entity{
  name: string
  checksum: number
}

export interface ContentChannel extends Channel{
  content: ChannelContent 
}

export interface GuildChannel extends Channel{
  guild: Guild;
}

export interface MessageChannel extends Channel{
  messageIDs: Array<string>
}

export interface PrivateChannel extends Channel{
  users: Array<User>
}

export interface PublicChannel extends Channel{
  owner: User
}

//#endregion

export interface User extends Entity{
  name: string
  status: Status
  profilePictureLocation: string
}

export interface Guild extends Entity {
  name: string
  channels: Channel[]
  iconLocation: string
  
}

export interface GraphQLGuild extends Guild{
  owner: User
  users: User[]
}

export interface ExtendedGuild extends GraphQLGuild{
  users: Array<User>
}

export enum Status{
  ONLINE = "ONLINE", OFFLINE = "OFFLINE", DND = "DND", IDLE = "IDLE"
}

