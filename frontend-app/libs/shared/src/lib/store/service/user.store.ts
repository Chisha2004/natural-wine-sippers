import { Injectable, inject, computed } from '@angular/core';
import {
  signalStore,
  withState,
  patchState,
  withMethods,
  withComputed,
  withHooks,
} from '@ngrx/signals';
import { UserService } from '../user/user.service';
import { UserType } from '../../model/user.interface';

const USER_STATE_STORAGE_KEY = 'user_state';

export interface UserState {
  uuid: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  userType?: UserType;
  hasError?: boolean;
  isLoading?: boolean;
}

const initialState: UserState = {
  uuid: '',
  email: '',
  firstName: '',
  lastName: '',
  token: '',
  hasError: false,
  isLoading: false,
  userType: UserType.GUEST,
};

@Injectable({
  providedIn: 'root',
})
export class UserStore extends signalStore(
  withState(initialState),
  withComputed((store) => ({
    currentUser: computed<UserState>(() => ({
      uuid: store.uuid(),
      email: store.email?.(),
      firstName: store.firstName?.(),
      lastName: store.lastName?.(),
      token: store.token?.(),
      userType: store.userType?.(),
      hasError: store.hasError?.(),
      isLoading: store.isLoading?.(),
    })),
    isLoggedIn: computed(() => {
      return (
        store.email &&
        !!store.email() &&
        store.userType &&
        store.userType() !== UserType.GUEST
      );
    }),
  })),
  withMethods((store, userService = inject(UserService)) => ({
    loadUser: (userId: string) => {
      patchState(store, { isLoading: true });
      userService.getUser(userId).subscribe({
        next: (user: UserState) => {
          patchState(store, user, { hasError: false, isLoading: false });
          persistUserToStorage(user);
        },
        error: () => {
          patchState(store, { hasError: true, isLoading: false });
        },
      });
    },
    login: (email: string, password: string) => {
      patchState(store, { isLoading: true });
      const guestUserUuid =
        store.userType && store.userType() === UserType.GUEST
          ? store.uuid()
          : undefined;
      userService.login(email, password, guestUserUuid).subscribe({
        next: (user: UserState) => {
          patchState(store, user, { hasError: false, isLoading: false });
          persistUserToStorage(user);
        },
        error: () => {
          patchState(store, { hasError: true, isLoading: false });
        },
      });
    },
    logout: () => {
      patchState(store, initialState);
      localStorage.removeItem(USER_STATE_STORAGE_KEY);
    },
  })),
  withHooks((store, userService = inject(UserService)) => ({
    onInit: () => {
      const userState = JSON.parse(
        localStorage.getItem(USER_STATE_STORAGE_KEY) || '{}'
      );

      if (userState.userType === UserType.GUEST) {
        patchState(store, userState, { hasError: false, isLoading: false });
      } else if (userState.token) {
        patchState(store, { isLoading: true });
        userService.loginWithToken(userState.token).subscribe({
          next: (user: UserState) => {
            patchState(store, user, { hasError: false, isLoading: false });
          },
          error: () => localStorage.removeItem(USER_STATE_STORAGE_KEY),
        });
      } else {
        userService.generateGuestUser().subscribe({
          next: (user: UserState) => {
            patchState(store, user, { hasError: false, isLoading: false });
            persistUserToStorage(user);
          },
        });
      }
    },
  }))
) {}

function persistUserToStorage(user: UserState): void {
  if (user) {
    localStorage.setItem(USER_STATE_STORAGE_KEY, JSON.stringify(user));
  }
}
