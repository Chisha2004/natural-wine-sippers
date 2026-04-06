import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { BeverageListComponent } from '../../components/beverage-list/beverage-list-component';
import { TranslateModule } from '@ngx-translate/core';
import { BeverageStore } from '../../services/beverage/beverage.store';

@Component({
  selector: 'app-landing',
  imports: [TranslateModule, HeaderComponent, BeverageListComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  providers: [HttpClient],
})
export class LandingComponent implements OnInit {
  readonly beverageStore = inject(BeverageStore);
  beverageCatalog = this.beverageStore.catalog;

  //TODO need to add mini card to show price as well on detailed
  ngOnInit(): void {
    this.beverageStore.loadCatalog();
  }

  test() {
    console.log('test');
  }
}
