import { Injectable } from '@angular/core';
import { OAuthService } from "angular-oauth2-oidc";
import { authConfig } from "./auth-config";
import { User } from "../chat/model/user.model";

@Injectable()
export class AuthService {

  constructor(private oAuthService: OAuthService) {
    this.oAuthService.configure(authConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    this.oAuthService.setupAutomaticSilentRefresh();
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  logout() {
    this.oAuthService.logOut();
  }

  get userProfile(): User {
    const userFromGoogle: any = this.oAuthService.getIdentityClaims();
    return userFromGoogle ? { name: userFromGoogle.name, photoUrl: userFromGoogle.picture } : null;
  }

  get isLoggedIn(): boolean {
    return !!this.userProfile;
  }

  get authToken(): string {
    return this.oAuthService.getAccessToken()
  }

  getAuthHeaders(): {[header: string]: string} {
    return {
      'Authorization': 'Bearer ' + this.authToken
    }
  }
}
