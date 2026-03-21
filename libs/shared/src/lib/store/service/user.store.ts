import { Injectable } from '@angular/core';
import { signalStore, withState, patchState } from '@ngrx/signals';
import { UserService } from '../user/user.service';

export interface UserState {
  id: string;
  firstName: string;
  lastName: string;
}

const initialState: UserState = {
  id: '',
  firstName: '',
  lastName: '',
};

@Injectable({
  providedIn: 'root',
})
export class UserStore extends signalStore(withState(initialState)) {
  constructor(private userService: UserService) {}

  loadUser = (userId: string) => {
    this.userService.getUser(userId).subscribe({
      next: (user: UserState) => {
        patchState(this, user);
      },
      error: (error) => {
        console.error('Error loading user:', error);
      },
    });
  };
}
