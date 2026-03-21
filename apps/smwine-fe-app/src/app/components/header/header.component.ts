import { Component, OnDestroy } from '@angular/core';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { takeWhile } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { SearchHeaderComponent } from './search-header/search-header.component';

@Component({
  selector: 'app-header',
  imports: [
    LanguageSelectorComponent,
    ShoppingCartComponent,
    ProfileHeaderComponent,
    SearchHeaderComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  private isActive = true;
  menuOpen = false;
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(takeWhile(() => this.isActive))
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
  ngOnDestroy(): void {
    this.isActive = false;
  }
}
