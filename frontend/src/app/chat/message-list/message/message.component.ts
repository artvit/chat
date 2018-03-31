import { Component, Input, OnInit } from '@angular/core';
import { Message } from "../../model/message.model";
import * as moment from 'moment';

@Component({
  selector: 'chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

  formatDate(date: Date): string {
    return moment(date).fromNow();
  }

}
