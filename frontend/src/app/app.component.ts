import { Component } from '@angular/core';
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'chat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService) { }

  title = 'chat';

}
