export interface Entity{
  uuid: string
}

//#region messages
export interface ChannelContent extends Entity{
  content: string
}

export interface Message extends Entity{
  content: string
  dateTime: string
  author: User
}
//#endregion

//#region Channels
export interface Channel extends Entity{
  name: String
  checksum: Number
}

export interface ContentChannel extends Channel{
  content: ChannelContent 
}

export interface GuildChannel extends Channel{
  guild: Guild;
}

export interface MessageChannel extends Channel{
  messages: Array<Message>
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

  channels: Array<Channel>
  privateChannels: Array<PrivateChannel>
  publicChannels: Array<PublicChannel>
  guilds: Array<Guild>
}

export interface Guild extends Entity{
  name: string
  channels: Array<GuildChannel>
}

export enum Status{
  ONLINE, OFFLINE, DND, IDLE
}

