import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { User } from "./model/user.model";
import { Message } from "./model/message.model";

@Component({
  selector: 'chat-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  currentUser: User;
  activeUsers: User[];

  messages: Message[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.userProfile;
    this.activeUsers = [this.currentUser, this.currentUser, this.currentUser];
    this.activeUsers = this.activeUsers.concat(this.activeUsers);
    this.activeUsers = this.activeUsers.concat(this.activeUsers);

    const message: Message = { author: this.currentUser, dateTime: new Date(), text: `ajsgdjhgajhsgdjhagjhsdghjasgdjhgajhdjhajhgdjhag
    adasdashjgdahgsjdgjhasgdjhgajhgdsjhahjsdgjhagjsdgjhasgdjghahjsdgjahsd
    asdasdasdasdasdasda sd a sd as d a sd as d asd a sd  asdlorem ipsum asda sd a sd a ds a sd a sda s d` };

    const message2 = {...message};
    message2.text = `22222222222222222222222222222222222222222222`;

    this.messages = [message, message2];
    this.messages = this.messages.concat(this.messages);
    this.messages = this.messages.concat(this.messages);
    this.messages = this.messages.concat(this.messages);
  }

  sendMessage(text: string) {
    console.log(text)
  }

  onScrolledToTop(oldestMessage: Message) {
    console.log(oldestMessage);
  }

}
