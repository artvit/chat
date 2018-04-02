import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { OAuthModule } from "angular-oauth2-oidc";

import { AppComponent } from './app.component';
import { AuthService } from "./auth/auth.service";
import { ChatComponent } from './chat/chat.component';
import { NotLoggedInComponent } from './not-logged-in/not-logged-in.component';
import { ProfileComponent } from './chat/profile/profile.component';
import { UserListComponent } from './chat/user-list/user-list.component';
import { UserComponent } from './chat/user-list/user/user.component';
import { MessageInputComponent } from './chat/message-input/message-input.component';
import { MessageListComponent } from './chat/message-list/message-list.component';
import { MessageComponent } from './chat/message-list/message/message.component';
import { ScrollTopDirective } from './chat/message-list/scroll-top.directive';
import { MessageService } from "./chat/message.service";
import { TestService } from "./test.service";


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NotLoggedInComponent,
    ProfileComponent,
    UserListComponent,
    UserComponent,
    MessageInputComponent,
    MessageListComponent,
    MessageComponent,
    ScrollTopDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    AuthService,
    MessageService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
