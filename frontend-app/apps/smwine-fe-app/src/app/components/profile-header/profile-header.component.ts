import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserStore } from '@smwine-fe-app/store';

@Component({
  selector: 'app-profile-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  private readonly userStore = inject(UserStore);

  readonly currentUser = this.userStore.currentUser;
  readonly isLoggedIn = this.userStore.isLoggedIn;

  readonly profileText = computed(() => {
    const currentUser = this.currentUser();
    return currentUser?.firstName && currentUser?.firstName
      ? currentUser?.firstName
      : `Acc: ${currentUser?.uuid}`; //TOdo we should find better alternative than show uuid.
  });
}
