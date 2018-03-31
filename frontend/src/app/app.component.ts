import { Component } from '@angular/core';
import { AuthService } from "./auth/auth.service";
import { TestService } from "./test.service";

@Component({
  selector: 'chat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService, private testService: TestService) { }

  title = 'chat';

  user: any;

  getMe() {
    this.testService.getMe().subscribe(data => this.user = data);
  }

}
