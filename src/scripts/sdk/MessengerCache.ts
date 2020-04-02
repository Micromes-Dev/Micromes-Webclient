import { User, Guild, Message, Channel, MessageChannel, Status } from './Interfaces';

export default class Cache {
  token: string = ""
  decodedJWTData: string = ""
  curUser: User = {id: "", name: "", status: Status.OFFLINE, profilePictureLocation: ""}
  users: Map<string, User> = new Map()
  guilds: Map<string, Guild> = new Map()
  channels: Map<string, Channel> = new Map()
  messages: Map<string, Message> = new Map()
  curGuild: Guild | undefined

  setCurUser(user: User) {
    this.curUser = user
  }

  addMessage(message: Message) {
    this.messages.set(message.id, message);
    console.log(this.messages)
  }

  addUser(user: User) {
    if (this.users)
      this.users.set(user.id, user)
  }

  addGuild(guild: Guild) {
    if (this.guilds)
      this.guilds.set(guild.id, guild)
  }

  addChannel(channel: Channel) {
    if (this.channels)
      this.channels.set(channel.id, channel)
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

  getMessage(uuid: string): Message | undefined {
    return this.messages.get(uuid)
  }

  getMessageByChannelAndIndex(channel: MessageChannel, index: number): Message | undefined {
    return this.getMessage(channel.messageIDs[index])
  }

  getMessages(channel: MessageChannel) : Array<Message> {
    var messages: Array<Message> = new Array<Message>()
    console.log(channel.messageIDs)
    /*for (var i = 0; i < channel.messageIDs.length; i++) {
      var msg = this.getMessage(channel.messageIDs[i])
      if (msg != undefined) messages.push(msg)
    }*/
    return messages
  }

  getLastMessages(channel: MessageChannel, number: number): Array<Message> {
    var messages: Array<Message> = new Array()
    for (var i = channel.messageIDs.length; i > channel.messageIDs.length - number; i--) {
      var message = this.getMessageByChannelAndIndex(channel, i)
      if (message)
        messages.push(message);
    }
    return messages
  }

  getChannels(guild: Guild): Array<Channel> {
    var channels: Array<Channel> = new Array<Channel>()
    for (var i in guild.channelIDs) {
      var channel = this.getChannel(guild.channelIDs[i])
      if (channel != undefined) channels.push(channel)
    }
    return channels
  }
}