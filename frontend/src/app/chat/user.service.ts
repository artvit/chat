import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";
import { User } from "./model/user.model";
import { Observable } from "rxjs/Observable";
import { interval } from "rxjs/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

@Injectable()
export class UserService {
  private static readonly RefreshInterval = 5000;

  activeUsers: Observable<User[]>;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.activeUsers = interval(UserService.RefreshInterval).pipe(
      startWith({}),
      switchMap(() => this.loadActiveUsers())
    )
  }

  loadActiveUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/user/active", {headers: this.authService.getAuthHeaders()});
  }

}
