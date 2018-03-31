import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Message } from "../model/message.model";

@Component({
  selector: 'chat-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnChanges, AfterViewInit {

  @Input() messages: Message[];
  @Output() scrolledToTop: EventEmitter<Message> = new EventEmitter<Message>();
  @ViewChild('scrolledArea') scrolledArea: ElementRef;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const messagesChange = changes['messages'];
    if (messagesChange && !messagesChange.isFirstChange()) {
      const prevMessages = <Message[]>messagesChange.previousValue;
      const newMessages = <Message[]>messagesChange.currentValue;
      if (newMessages[newMessages.length - 1] !== prevMessages[prevMessages.length - 1]) {
        setTimeout(this.scrollBottom.bind(this));
      }
    }
  }

  ngAfterViewInit(): void {
    setTimeout(this.scrollBottom.bind(this));
  }

  onScrollUp(): void {
    console.log('hello');
    this.scrolledToTop.emit(this.messages[0]);
  }

  scrollBottom(): void {
    this.scrolledArea.nativeElement.scrollTop = this.scrolledArea.nativeElement.scrollHeight;
  }

}
