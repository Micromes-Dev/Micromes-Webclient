import { JsonDecoder } from 'ts.data.json';
import { User } from '../Interfaces';

export default class UserFactory{
  jsonToUser(jsonString: string){
    var user :User = JSON.parse(jsonString);
  }
}