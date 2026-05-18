import { Component, effect, inject, signal } from '@angular/core';
import { UserStore } from '../../store/service/user.store';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly userStore = inject(UserStore);
  private router = inject(Router);
  // Reactive form state using standard Signals
  readonly email = signal('');
  readonly password = signal('');
  readonly errorMessage = signal<string | null>(null);

  constructor() {
    effect(() => {
      const error = this.userStore.hasError?.();
      if (error) {
        //TODO store should provide more specific error messages (e.g. invalid credentials, network error, etc.)
        this.errorMessage.set('Invalid email or password.'); //TODO translate this message using i18n
      }
    });

    effect(() => {
      const isLoading = this.userStore.isLoading?.();
      const userEmail = this.userStore.email?.();
      if (this.email() && !isLoading && userEmail === this.email()) {
        this.router.navigate(['/wine']);
      }
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Stop standard browser page reload

    this.clearError();

    if (!this.email() || !this.password()) {
      this.errorMessage.set('Please fill out all required fields.'); //TODO: Use i18n
      return;
    }

    this.userStore.login(this.email(), this.password());
  }

  clearError() {
    this.errorMessage.set(null);
  }
}
