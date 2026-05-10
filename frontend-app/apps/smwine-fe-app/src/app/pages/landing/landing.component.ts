import {
  Component,
  computed,
  DestroyRef,
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
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-landing',
  imports: [TranslateModule, HeaderComponent, BeverageListComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  providers: [HttpClient],
})
export class LandingComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private readonly beverageStore = inject(BeverageStore);
  private destroyRef = inject(DestroyRef);

  private readonly beverageCatalog = this.beverageStore.catalog;
  activeBeverageType: WritableSignal<BeverageType> = signal(BeverageType.Wine); //Default wine
  //TODO need to get the active category from either the url or local storage so that when user refreshes the page, it doesn't reset to wine. Also need to update the url when user changes category so that they can share the url with the category they are currently viewing.
  beveragesByType = computed(() =>
    this.beverageCatalog().filter(
      (beverage) => beverage.type === this.activeBeverageType()
    )
  );
  //TODO need to add mini card to show price as well on detailed

  private getBeverageTypeFromValue(value: string | null): BeverageType | null {
    switch (value?.toLowerCase()) {
      case BeverageType.Wine.toLowerCase():
        return BeverageType.Wine;
      case BeverageType.Beer.toLowerCase():
        return BeverageType.Beer;
      case BeverageType.Cider.toLowerCase():
        return BeverageType.Cider;
      default:
        return null;
    }
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const beverageType = params.get('type');
        const validBeverageType = this.getBeverageTypeFromValue(beverageType);
        if (validBeverageType) {
          this.activeBeverageType.set(validBeverageType);
        }
      });
  }
}
