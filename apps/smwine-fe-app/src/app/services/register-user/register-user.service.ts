import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUser } from '../../models/register-user.interface';
import { RegisterUserResponse } from './model/register-user-response.interface';
import { environment } from '../../../environments/environment'; //TODO would this load different when built for prod

@Injectable({
  providedIn: 'root',
})
export class RegisterUserService {
  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  registerUser(user: RegisterUser): Observable<RegisterUserResponse> {
    return this.http.post<RegisterUserResponse>(
      `${this.apiBaseUrl}/register`,
      user
    );
  }
}
