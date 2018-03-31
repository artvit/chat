import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from "./auth/auth.service";
import { ChatComponent } from './chat/chat.component';
import { OAuthModule } from "angular-oauth2-oidc";
import { HttpClientModule } from "@angular/common/http";
import { TestService } from "./test.service";


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [''],
        sendAccessToken: true
      }
    })
  ],
  providers: [AuthService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
