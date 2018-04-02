import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as SockJS from 'sockjs-client';
import * as StompJS from 'stompjs';
import { Client } from "stompjs";
import { AuthService } from "../auth/auth.service";
import { Message } from "./model/message.model";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { combineLatest } from "rxjs/observable/combineLatest";


@Injectable()
export class MessageService {
  private static ServerUrl = 'http://localhost:8080/socket';
  private stompClient: Client;

  readonly messages: Observable<Message[]>;

  private messages$: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) {
    this.initializeWebSocketConnection();
    this.messages = this.initializeMessagesObservable();
  }

  private initializeWebSocketConnection() {
    let ws = new SockJS(MessageService.ServerUrl + '?access_token=' + this.authService.authToken);
    this.stompClient = StompJS.over(ws);
    this.stompClient.connect(this.headers, () => this.onConnect());
    this.stompClient.debug = null
  }

  private initializeMessagesObservable(): Observable<Message[]>{
    return this.messages$.asObservable();
  }

  private onConnect() {
    this.stompClient.subscribe("/chat", (message) => {
      if(message.body) {
        const messageObject: Message = JSON.parse(message.body);
        this.messages$.next(this.messages$.getValue().concat(messageObject));
      }
    }, this.headers);
  }

  sendMessage(message: string): void {
    this.stompClient.send("/app/send/message" , this.headers, message);
  }

  shutDown(): void {
    this.stompClient.disconnect(() => {});
  }

  getOldMessages(size: number, date: Date | string): void {
    if (!date || !size) {
      return;
    }
    this.http.get<Message[]>('http://localhost:8080/message/history', {
      headers: this.headers,
      params: {
        size: size.toString(),
        date: typeof date === 'string' ? date : date.toISOString()
      }})
      .subscribe(oldMessages => {
        this.messages$.next(oldMessages.concat(this.messages$.getValue()));
      });
  }

  private get headers(): {[header: string]: string} {
    return {
      'Authorization': 'Bearer ' + this.authService.authToken
    }
  }
}
