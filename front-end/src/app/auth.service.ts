import { isPlatformBrowser } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isBrowser: boolean = false;
  private isAuth: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  public isAuthenticated(): boolean {
    if (this.isBrowser) {
      const token = localStorage.getItem('token');
      console.log('Token desde auth:', token);
      this.isAuth = token ? true : false;
    }
    return this.isAuth;
  }
}
