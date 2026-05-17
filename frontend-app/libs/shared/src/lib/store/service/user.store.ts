import { Injectable, inject } from '@angular/core';
import { signalStore, withState, patchState, withMethods } from '@ngrx/signals';
import { UserService } from '../user/user.service';

export interface UserState {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  hasError?: boolean;
  isLoading?: boolean;
}

const initialState: UserState = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  token: '',
  hasError: false,
  isLoading: false,
};

@Injectable({
  providedIn: 'root',
})
export class UserStore extends signalStore(
  withState(initialState),
  withMethods((store, userService = inject(UserService)) => ({
    loadUser: (userId: string) => {
      patchState(store, { isLoading: true });
      userService.getUser(userId).subscribe({
        next: (user: UserState) => {
          patchState(store, user, { hasError: false, isLoading: false });
        },
        error: (error) => {
          patchState(store, { hasError: true, isLoading: false });
        },
      });
    },
    login: (email: string, password: string) => {
      patchState(store, { isLoading: true });
      userService.login(email, password).subscribe({
        next: (user: UserState) => {
          patchState(store, user, { hasError: false, isLoading: false });
        },
        error: (error) => {
          patchState(store, { hasError: true, isLoading: false });
        },
      });
    },
  }))
) {
  constructor() {
    super();
  }
}
