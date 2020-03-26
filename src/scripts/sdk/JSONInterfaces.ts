import { Entity, Channel } from './Interfaces';

//#region messages
export interface JSONMessage extends Entity{
  content: string
  dateTime: string
  authorUUID: string
}
//#endregion

//#region Channels
export interface JSONGuildChannel extends Channel{
  guildUUID: string
}

export interface JSONMessageChannel extends Channel{
  messageUUIDs: Array<string>
}

export interface JSONPrivateChannel extends Channel{
  userUUIDs: Array<string>
}

export interface JSONPublicChannel extends Channel{
  ownerUUID: string
}
//#endregion

export interface JSONUser extends Entity{
  name: string
  status: string
  profilePictureLocation: string

  channelUUIDs: Array<string>
  privateChannelUUIDs: Array<string>
  publicChannelUUIDs: Array<string>
  guildUUIDs: Array<string>
}

export interface JSONGuild extends Entity{
  name: string
  channelUUIDs: Array<string>
}