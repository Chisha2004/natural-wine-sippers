import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { RegisterUserService } from '../../../services/register-user/register-user.service';
import { RegisterUserResponse } from '../../../services/register-user/model/register-user-response.interface';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockHttpInterceptor } from '@smwine-fe-app/interceptor';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHttpInterceptor, //TODO why is there a mock interceptor here?
      multi: true,
    },
  ],
})
export class RegisterComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerUserService: RegisterUserService
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{10,}$/)],
      ],
      streetAddress: ['', Validators.required],
      postcode: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z0-9]{4,6}$/)],
      ],
      phone: ['', [Validators.pattern(/^[0-9]{10,}$/)]],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      //TODO show spinner
      this.registerUserService.registerUser(this.userForm.value).subscribe({
        next: (registerUserResponse: RegisterUserResponse) => {
          console.log(registerUserResponse);
        },
        error: (error) => {
          //TODO remove log and use toast service
          console.log(error);
        },
        complete: () => {
          //TODO need a spinner component to toggle on and off
        },
      }); //TODO unsubscribe
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
