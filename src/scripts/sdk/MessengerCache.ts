import { User, Guild, Message, Channel, MessageChannel, Status } from './Interfaces';

export default class Cache {
  decodedJWTData: string = ""
  curUser: User = {uuid: "", name: "", status: Status.OFFLINE, profilePictureLocation: ""}
  users: Map<string, User> = new Map()
  guilds: Map<string, Guild> = new Map()
  channels: Map<string, Channel> = new Map()
  messages: Map<string, Message> = new Map()

  setCurUser(user: User) {
    this.curUser = user
  }

  addUser(user: User) {
    if (this.users)
      this.users.set(user.uuid, user)
  }

  addGuild(guild: Guild) {
    if (this.guilds)
      this.guilds.set(guild.uuid, guild)
  }

  addChannel(channel: Channel) {
    if (this.channels)
      this.channels.set(channel.uuid, channel)
  }

  getUser(uuid: string): User | undefined {
    if (this.users)
      return this.users.get(uuid)
  }

  getGuild(uuid: string): Guild | undefined {
    if (this.guilds)
      return this.guilds.get(uuid)
  }

  getGuilds(): Array<Guild>{
    return Array.from(this.guilds.values());
  }

  getChannel(channelId: string): Channel | undefined {
    return this.channels.get(channelId);
  }

  getMessageByUUID(uuid: string): Message | undefined {
    return this.messages.get(uuid)
  }

  getMessageByChannelAndIndex(channel: MessageChannel, index: number): Message | undefined {
    return this.getMessageByUUID(channel.messageUUIDs[index])
  }

  getLastMessages(channel: MessageChannel, number: number): Array<Message> {
    var messages: Array<Message> = new Array()
    for (var i = channel.messageUUIDs.length; i > channel.messageUUIDs.length - number; i--) {
      var message = this.getMessageByChannelAndIndex(channel, i)
      if (message)
        messages.push(message);
    }
    return messages
  }

  getChannels(guild: Guild): Array<Channel> {
    var channels: Array<Channel> = new Array<Channel>()
    for (var uuid in guild.channelUUIDs) {
      var channel = this.getChannel(uuid)
      if (channel)
        channels.push(channel)
    }
    return channels
  }
}