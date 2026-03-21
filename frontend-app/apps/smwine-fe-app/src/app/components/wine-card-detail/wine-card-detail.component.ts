import { Component, OnInit } from '@angular/core';
import { Beverage } from '../../models/beverage.interface';
import { CurrencyPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { BeverageService } from '../../services/beverage/beverage.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-wine-card-detail',
  imports: [CurrencyPipe, HeaderComponent],
  templateUrl: './wine-card-detail.component.html',
  styleUrl: './wine-card-detail.component.scss',
})
export class WineCardDetailComponent implements OnInit {
  beverage: Beverage | null = null; //TODO this should based on route param id fetch the beverage details from backend

  constructor(private beverageService: BeverageService) {}
  ngOnInit(): void {
    this.beverageService
      .getBeverage('1')
      .pipe(take(1))
      .subscribe({ next: (beverage: Beverage) => (this.beverage = beverage) });
  }
}
