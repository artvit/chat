import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { User } from "./model/user.model";
import { Message } from "./model/message.model";
import { MessageService } from "./message.service";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { UserService } from "./user.service";

@Component({
  selector: 'chat-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  currentUser: User;

  messages: Observable<Message[]>;
  activeUsers: Observable<User[]>;

  constructor(private authService: AuthService, private messageService: MessageService, private userService: UserService) {
    this.messages = messageService.messages
      .pipe(map(messages => messages.sort((m1, m2) => m1.dateTime.toString().localeCompare(m2.dateTime.toString()))));
    this.activeUsers = this.userService.activeUsers;
  }

  ngOnInit() {
    this.currentUser = this.authService.userProfile;
    this.messageService.getOldMessages(50, new Date());
  }

  ngOnDestroy(): void {
    this.messageService.shutDown()
  }

  sendMessage(text: string) {
    this.messageService.sendMessage(text);
  }

  onScrolledToTop(oldestMessage: Message) {
    this.messageService.getOldMessages(50, oldestMessage.dateTime);
  }

}
