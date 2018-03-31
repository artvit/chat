import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from "./auth/auth.service";
import { ChatComponent } from './chat/chat.component';
import { OAuthModule } from "angular-oauth2-oidc";
import { HttpClientModule } from "@angular/common/http";
import { NotLoggedInComponent } from './not-logged-in/not-logged-in.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NotLoggedInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
