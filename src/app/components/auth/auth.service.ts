import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl: 'https://btaks-csfwi-api.herokuapp.com/api';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register() {

  }

  login(email: string, password: string): void {
    this.logout();
    this.http.post<any>(`${this.authUrl}/login`, {
        email,
        password
      })
      .subscribe((res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      });
  }

  logout(): void {
    localStorage.clear();
  }
}
