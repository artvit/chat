import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users = [];

  constructor() { }

  ngOnInit() {
  }

}
