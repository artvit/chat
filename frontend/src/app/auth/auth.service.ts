import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from "angular-oauth2-oidc";
import { authConfig } from "./auth-config";

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

  get userProfile(): any {
    return this.oAuthService.getIdentityClaims();
  }

  get isLoggedIn(): boolean {
    return !!this.userProfile;
  }

  get authToken(): string {
    return this.oAuthService.getAccessToken()
  }
}
