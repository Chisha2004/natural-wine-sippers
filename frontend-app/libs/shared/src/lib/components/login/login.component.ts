import { Component, inject, signal } from '@angular/core';
import { UserStore } from '../../store/service/user.store';

@Component({
  selector: 'lib-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly userStore = inject(UserStore);
  // Reactive form state using standard Signals
  readonly email = signal('');
  readonly password = signal('');

  onSubmit(event: Event) {
    event.preventDefault(); // Stop standard browser page reload

    this.userStore.login(this.email(), this.password());
  }
}
