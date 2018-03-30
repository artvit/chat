import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from "angular-oauth2-oidc";
import { authConfig } from "./auth-config";

@Injectable()
export class AuthService {

  constructor(private router: Router, private oAuthService: OAuthService) {
    this.oAuthService.configure(authConfig);
    // this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }

  handleLoginCallback() {
  }


  logout() {
    this.oAuthService.logOut();
  }

  get userProfile(): any {
    return this.oAuthService.getIdentityClaims();
  }

  get isLoggedIn(): boolean {
    return !!this.oAuthService.getIdentityClaims();
  }

}
