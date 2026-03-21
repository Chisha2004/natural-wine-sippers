import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  logout() {
    // Handle logout logic
    console.log('Logging out...');
  }
}
