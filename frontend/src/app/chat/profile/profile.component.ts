import { Component, Input } from '@angular/core';
import { User } from "../model/user.model";

@Component({
  selector: 'chat-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{
  @Input() user: User;
}
