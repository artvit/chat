import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as SockJS from 'sockjs-client';
import * as StompJS from 'stompjs';
import { Client } from "stompjs";
import { AuthService } from "../auth/auth.service";
import { Subject } from "rxjs/Subject";
import { Message } from "./model/message.model";
import { Observable } from "rxjs/Observable";


@Injectable()
export class MessageService {
  private static ServerUrl = 'http://localhost:8080/socket';
  private stompClient: Client;

  private newMessages$: Subject<Message> = new Subject<Message>();

  constructor(private http: HttpClient, private authService: AuthService) {
    this.initializeWebSocketConnection();
  }

  private initializeWebSocketConnection() {
    let ws = new SockJS(MessageService.ServerUrl + '?access_token=' + this.authService.authToken);
    this.stompClient = StompJS.over(ws);
    this.stompClient.connect(this.headers, () => this.onConnect());
    this.newMessages$.subscribe(console.log);
  }

  private onConnect() {
    this.stompClient.subscribe("/chat", (message) => {
      if(message.body) {
        const messageObject: Message = JSON.parse(message.body);
        this.newMessages$.next(messageObject);
      }
    }, this.headers);
  }

  sendMessage(message: string): void {
    this.stompClient.send("/app/send/message" , this.headers, message);
  }

  shutDown(): void {
    this.stompClient.disconnect(() => {});
  }

  private get headers(): {[header: string]: string} {
    return {
      'Authorization': 'Bearer ' + this.authService.authToken
    }
  }

  getOldMessages(size: number, date: Date): Observable<Message[]> {
    return this.http.get<Message[]>('http://localhost:8080/history', {
      headers: this.headers,
      params: {
        size: size.toString(),
        date: date.toISOString()
      }});
  }
}
