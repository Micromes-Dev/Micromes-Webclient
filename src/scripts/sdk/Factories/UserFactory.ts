import User from '../Interfaces/User';
import { JsonDecoder } from 'ts.data.json';

export default class UserFactory{
  jsonToUser(jsonString: string){
    var user :User = JSON.parse(jsonString);
  }
}