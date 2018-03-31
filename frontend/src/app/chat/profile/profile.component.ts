import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { User } from "../model/user.model";

@Component({
  selector: 'chat-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.userProfile;
  }

}
