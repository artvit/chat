import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'chat-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  text: string = '';

  @Output() textSent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendText() {
    if (this.text) {
      this.textSent.emit(this.text);
      this.text = '';
    }
  }

}
