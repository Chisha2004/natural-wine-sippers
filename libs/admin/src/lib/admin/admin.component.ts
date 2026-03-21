import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type PageType = 'users' | 'orders' | 'stock'; //TODO move this to proper dir

interface NavLink {
  //TODO move this to proper dir
  label: string;
  page: PageType;
  icon: string; // We'll store the SVG path or icon name here
}

@Component({
  selector: 'lib-admin',
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  //TODO add routes and components for Users, Orders and Stock
  isSidebarOpen = false;

  activePage: PageType | '' = '';
  navLinks: NavLink[] = [
    //TODO maybe this can live in a router dir or another dir or for now we can keep it here
    {
      label: 'Users',
      page: 'users',
      icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z M4.5 20.25a8.25 8.25 0 0115 0',
    }, // User icon
    { label: 'Orders', page: 'orders', icon: 'M3 3h18v4H3V3zm0 6h18v12H3V9z' }, // Orders icon
    { label: 'Stock', page: 'stock', icon: 'M12 3v18m9-9H3' }, // Plus icon for stock
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
