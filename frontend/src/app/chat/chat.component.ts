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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.userProfile;
  }

}
