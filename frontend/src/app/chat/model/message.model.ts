import { User } from "./user.model";

export class Message {
  text: string;
  dateTime: Date;
  author: User;
}
