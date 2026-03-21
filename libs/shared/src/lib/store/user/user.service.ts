import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(userId: string): Observable<User> {
    return this.http.post<RegisterUserResponse>(
      `${this.apiBaseUrl}/register`,
      user
    );
  }
}
