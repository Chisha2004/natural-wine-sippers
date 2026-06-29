import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_BASE_URL = '/api/v1';

  private readonly http: HttpClient = inject(HttpClient);

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.API_BASE_URL}/users/${userId}`);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.API_BASE_URL}/auth/login`, {
      email,
      password,
    });
  }

  loginWithToken(token: string): Observable<User> {
    return this.http.post<User>(`${this.API_BASE_URL}/auth/token-login`, {
      token,
    });
  }

  generateGuestUser(): Observable<User> {
    return this.http.get<User>(`${this.API_BASE_URL}/auth/generate-guest-user`);
  }
}
