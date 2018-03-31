import { Component, Input } from '@angular/core';
import { User } from "../../model/user.model";

@Component({
  selector: 'chat-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;
}
