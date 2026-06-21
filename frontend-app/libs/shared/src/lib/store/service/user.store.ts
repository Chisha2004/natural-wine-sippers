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
          persistUserToStorage(user);
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
          persistUserToStorage(user);
        },
        error: (error) => {
          patchState(store, { hasError: true, isLoading: false });
        },
      });
    },
    logout: () => {
      patchState(store, initialState);
      localStorage.removeItem('user');
    },
    restoreUser: () => {
      const stored = localStorage.getItem('user'); //TODO localUser store should not store actual user object but read everytime from
      if (stored) {
        try {
          const user = JSON.parse(stored);
          patchState(store, user);
        } catch (_error) {
          localStorage.removeItem('user');
        }
      }
    },
  }))
) {
  constructor() {
    super();
    this.restoreUser();
  }
}

function persistUserToStorage(user: UserState): void {
  localStorage.setItem('user', JSON.stringify(user));
}
