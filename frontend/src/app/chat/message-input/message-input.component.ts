import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'chat-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  text: string = '';

  @Output() textSent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('textarea') textArea: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  sendText(event: Event) {
    event.preventDefault();
    if (this.text) {
      this.textSent.emit(this.text);
      this.text = '';
    }
    this.focusInput();
  }

  focusInput() {
    this.textArea.nativeElement.focus();
  }

}
