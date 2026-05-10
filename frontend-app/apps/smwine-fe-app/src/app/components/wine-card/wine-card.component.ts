/* eslint-disable @angular-eslint/prefer-inject */
import { Component, input, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  beverage = input.required<Beverage>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private cartService: CartService
  ) {}

  goToBevergaeDetails(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  getAddToCartLabel(): string {
    return `${this.translate.instant('WINE_CARD.ADD_TO_CART')} ${
      this.beverage().name
    } to cart button`;
  }

  addToCart() {
    this.cartService.addToCart({
      productId: this.beverage().id,
      quantity: 1,
    });
  }
}
