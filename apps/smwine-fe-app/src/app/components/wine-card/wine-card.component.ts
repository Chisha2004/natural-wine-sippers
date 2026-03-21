/* eslint-disable @angular-eslint/prefer-inject */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Beverage } from '../../models/beverage.interface';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-wine-card',
  imports: [CurrencyPipe],
  providers: [CurrencyPipe],
  templateUrl: './wine-card.component.html',
  styleUrl: './wine-card.component.scss',
})
export class WineCardComponent {
  @Input() beverage!: Beverage;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private cartService: CartService
  ) {}

  goToBevergaeDetails(id: string) {
    this.router.navigate(['/beverages', id]);
  }

  getAddToCartLabel(): string {
    return `${this.translate.instant('WINE_CARD.ADD_TO_CART')} ${
      this.beverage.name
    } to cart button`;
  }

  addToCart() {
    this.cartService.addToCart({
      productId: this.beverage.id,
      quantity: 1,
    });
  }
}
