import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { User } from "./model/user.model";

@Component({
  selector: 'chat-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  currentUser: User;

  activeUsers: User[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.userProfile;
    this.activeUsers = [this.currentUser, this.currentUser, this.currentUser];
    this.activeUsers = this.activeUsers.concat(this.activeUsers);
    this.activeUsers = this.activeUsers.concat(this.activeUsers);
  }

  sendMessage(text: string) {
    console.log(text)
  }

}
