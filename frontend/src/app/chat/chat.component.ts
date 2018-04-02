import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { User } from "./model/user.model";
import { Message } from "./model/message.model";
import { MessageService } from "./message.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'chat-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  currentUser: User;

  activeUsers: User[];

  messages: Observable<Message[]>;

  constructor(private authService: AuthService, private messageService: MessageService) {
    this.messages = messageService.messages;
  }

  ngOnInit() {
    this.currentUser = this.authService.userProfile;
    this.activeUsers = [this.currentUser, this.currentUser, this.currentUser];

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
