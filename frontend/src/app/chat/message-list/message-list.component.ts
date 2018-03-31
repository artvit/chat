import { Component, Input, OnInit } from '@angular/core';
import { Message } from "../model/message.model";

@Component({
  selector: 'chat-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  @Input() messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
