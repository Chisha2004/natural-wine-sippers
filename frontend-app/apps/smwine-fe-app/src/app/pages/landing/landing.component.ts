import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BeverageService } from '../../services/beverage/beverage.service';
import { Beverage } from '../../models/beverage.interface';
import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BeverageListComponent } from '../../components/beverage-list/beverage-list-component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  imports: [TranslateModule, HeaderComponent, BeverageListComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  providers: [HttpClient],
})
export class LandingComponent implements OnInit {
  beverage!: Beverage;
  beverages!: Beverage[];

  constructor(private beverageService: BeverageService) {}

  //TODO need to add mini card to show price as well on detailed
  ngOnInit(): void {
    this.beverageService
      .getBeverages('wine')
      .pipe(take(1))
      .subscribe({
        next: (beverages: Beverage[]) => (this.beverages = beverages),
      });
  }
}
