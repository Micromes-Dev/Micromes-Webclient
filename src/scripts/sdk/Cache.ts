import { User, Guild, Message, Channel } from './Interfaces';

export default class Cache{
  loggedIn: Boolean = false
  id_token: string = ""
  curUser: User | undefined
  users: Map<string, User> | undefined
  guilds: Map<string, Guild> | undefined

  setCurUser(user: User){
    this.curUser = user
  }

  addUser(user: User){
    if(this.users)
    this.users.set(user.uuid, user)
  }

  addGuild(guild: Guild){
    if(this.guilds)
    this.guilds.set(guild.uuid, guild)
  }

  getUser(uuid: string): User | undefined{
    if(this.users)
    return this.users.get(uuid)
  }

  getGuild(uuid: string): Guild | undefined{
    if(this.guilds)
    return this.guilds.get(uuid)
  }

  getLastMessages(channel: Channel, number: Number) : Array<Message>{
    console.error('Function getLastMessages in Cache.ts not implemented yet');
    return []
  }

  getChannels(guild: Guild): Array<Channel>{
    console.error('Function getChannels in Cache.ts not implemented yet');
    return []
  }
}