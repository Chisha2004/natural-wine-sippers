import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUser } from '../../models/register-user.interface';
import { RegisterUserResponse } from './model/register-user-response.interface';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService {
  constructor(private http: HttpClient) {}

  registerUser(user: RegisterUser): Observable<RegisterUserResponse> {
    return this.http.post<RegisterUserResponse>(`/api/v1/auth/register`, user);
  }
}
