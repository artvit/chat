import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { User } from "./model/user.model";
import { Message } from "./model/message.model";
import { MessageService } from "./message.service";
import { TestService } from "../test.service";

@Component({
  selector: 'chat-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  currentUser: User;

  activeUsers: User[];
  messages: Message[];

  constructor(private authService: AuthService, private messageService: MessageService) { }

  ngOnInit() {
    this.currentUser = this.authService.userProfile;
    this.activeUsers = [this.currentUser, this.currentUser, this.currentUser];
    this.activeUsers = this.activeUsers.concat(this.activeUsers);
    this.activeUsers = this.activeUsers.concat(this.activeUsers);

  }

  ngOnDestroy(): void {
    this.messageService.shutDown();
  }

  sendMessage(text: string) {
    this.messageService.sendMessage(text);
  }

  onScrolledToTop(oldestMessage: Message) {
    console.log(oldestMessage);
  }

}
