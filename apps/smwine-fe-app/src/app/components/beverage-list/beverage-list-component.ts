import { Component, Input } from '@angular/core';
import { Beverage } from '../../models/beverage.interface';
import { WineCardComponent } from '../wine-card/wine-card.component';

@Component({
  selector: 'app-beverage-list',
  imports: [WineCardComponent],
  templateUrl: './beverage-list-component.html',
  styleUrl: './beverage-list-component.scss',
})
export class BeverageListComponent {
  @Input() beverages!: Beverage[];
}
