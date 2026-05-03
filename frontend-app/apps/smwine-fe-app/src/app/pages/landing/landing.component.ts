import {
  Component,
  computed,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpClient } from '@angular/common/http';
import { BeverageListComponent } from '../../components/beverage-list/beverage-list-component';
import { TranslateModule } from '@ngx-translate/core';
import { BeverageStore } from '../../services/beverage/beverage.store';
import { BeverageType } from '../../models/beverage-category.interface';

@Component({
  selector: 'app-landing',
  imports: [TranslateModule, HeaderComponent, BeverageListComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  providers: [HttpClient],
})
export class LandingComponent implements OnInit {
  readonly beverageStore = inject(BeverageStore);
  private readonly beverageCatalog = this.beverageStore.catalog;
  activeBeverageType: WritableSignal<BeverageType> = signal('Wine'); //Default wine
  //TODO need to get the active category from either the url or local storage so that when user refreshes the page, it doesn't reset to wine. Also need to update the url when user changes category so that they can share the url with the category they are currently viewing.
  beveragesByType = computed(() =>
    this.beverageCatalog().filter(
      (beverage) => beverage.type === this.activeBeverageType()
    )
  );
  //TODO need to add mini card to show price as well on detailed
  ngOnInit(): void {
    this.beverageStore.loadCatalog();
  }
}
