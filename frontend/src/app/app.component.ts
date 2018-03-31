import { Component } from '@angular/core';
import { AuthService } from "./auth/auth.service";
import { TestService } from "./test.service";

@Component({
  selector: 'chat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  constructor(
    public authService: AuthService
  ) { }

}
