import { Component } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'chat-not-logged-in',
  templateUrl: './not-logged-in.component.html',
  styleUrls: ['./not-logged-in.component.scss']
})
export class NotLoggedInComponent {

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login();
  }

}
