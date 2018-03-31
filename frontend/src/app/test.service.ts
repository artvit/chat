import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth/auth.service";

@Injectable()
export class TestService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getMe() {
    return this.http.get<any>("http://localhost:8080/user/me", {
      headers: {
        "Authorization": 'Bearer ' + this.authService.authToken
      }
    });
  }

}
