import { Component, Input, OnInit } from '@angular/core';
import { User } from "../../model/user.model";

@Component({
  selector: 'chat-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
