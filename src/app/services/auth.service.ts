import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private mockUser = { username: "user@user.com", password: "123123123" }
  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if (username === this.mockUser.username && password === this.mockUser.password) {
      this.isAuthenticated = true;
      sessionStorage.setItem('user', JSON.stringify(this.mockUser))
      return true
    } else {
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    sessionStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('user') !== null;
  }
}
