import { User, Guild, Message, Channel } from './Interfaces';

export default class Cache{
  static curUser: User
  static users: Map<string, User>
  static guilds: Map<string, Guild>

  static setCurUser(user: User){
    this.curUser = user
  }

  static addUser(user: User){
    this.users.set(user.uuid, user)
  }

  static addGuild(guild: Guild){
    this.guilds.set(guild.uuid, guild)
  }

  static getUser(uuid: string): User | undefined{
    return this.users.get(uuid)
  }

  static getGuild(uuid: string): Guild | undefined{
    return this.guilds.get(uuid)
  }

  static getLastMessages(channel: Channel, number: Number) : Array<Message>{
    console.error('Function getLastMessages in Cache.ts not implemented yet');
    return []
  }

  static getChannels(guild: Guild): Array<Channel>{
    console.error('Function getChannels in Cache.ts not implemented yet');
    return []
  }
}