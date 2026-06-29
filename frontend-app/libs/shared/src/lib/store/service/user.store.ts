import { Injectable, inject, computed } from '@angular/core';
import {
  signalStore,
  withState,
  patchState,
  withMethods,
  withComputed,
} from '@ngrx/signals';
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
  withComputed((store) => ({
    currentUser: computed(() => store),
    isLoggedIn: computed(() => !!store.id()),
  })),
  withMethods((store, userService = inject(UserService)) => ({
    loadUser: (userId: string) => {
      patchState(store, { isLoading: true });
      userService.getUser(userId).subscribe({
        next: (user: UserState) => {
          patchState(store, user, { hasError: false, isLoading: false });
          persistUserTokenToStorage(user.token);
        },
        error: () => {
          patchState(store, { hasError: true, isLoading: false });
        },
      });
    },
    login: (email: string, password: string) => {
      patchState(store, { isLoading: true });
      userService.login(email, password).subscribe({
        next: (user: UserState) => {
          patchState(store, user, { hasError: false, isLoading: false });
          persistUserTokenToStorage(user.token);
        },
        error: () => {
          patchState(store, { hasError: true, isLoading: false });
        },
      });
    },
    logout: () => {
      patchState(store, initialState);
      localStorage.removeItem('user_token');
    },
    restoreUser: () => {
      const token = localStorage.getItem('user_token');
      if (token) {
        patchState(store, { isLoading: true });
        userService.loginWithToken(token).subscribe({
          next: (user: UserState) => {
            patchState(store, user, { hasError: false, isLoading: false });
          },
          error: (error) => {
            if (error.status === 401) {
              localStorage.removeItem('user_token');
            }
          },
        });
      } else {
        userService.generateGuestUser().subscribe({
          next: (user: UserState) => {
            patchState(store, user, { hasError: false, isLoading: false });
            persistUserTokenToStorage(user.token);
          },
          //TODO if we do not manage to generate guest token then when adding item to cart we can potentially attempt to generate it again.
        });
      }
    },
  }))
) {
  constructor() {
    super();
    this.restoreUser();
  }
}

function persistUserTokenToStorage(token?: string): void {
  if (!token) {
    localStorage.removeItem('user_token');
  }
}
