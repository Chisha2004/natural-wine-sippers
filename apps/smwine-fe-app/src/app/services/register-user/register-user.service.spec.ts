import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { RegisterUserService } from './register-user.service';
import { RegisterUser } from '../../models/register-user.interface';

describe('RegisterUserService', () => {
  let service: RegisterUserService;
  let httpMock: HttpTestingController;

  const mockUser: RegisterUser = {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '1234567890',
    streetAddress: '123 Main St',
    postcode: '12345',
  };

  const mockResponse = {
    id: 'abc123',
    ...mockUser,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RegisterUserService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(RegisterUserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call POST /api/users when registerUser is called', () => {
    //TODO add correct name
    service.registerUser(mockUser).subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);

    req.flush(mockResponse);
  });
});
