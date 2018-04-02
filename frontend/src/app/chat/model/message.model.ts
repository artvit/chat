import { User } from "./user.model";

export class Message {
  id: string;
  text: string;
  dateTime: Date;
  author: User;
}
