import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { BeverageStore } from '../../services/beverage/beverage.store';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-wine-card-detail',
  imports: [CurrencyPipe, HeaderComponent],
  templateUrl: './wine-card-detail.component.html',
  styleUrl: './wine-card-detail.component.scss',
})
export class WineCardDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private readonly beverageStore = inject(BeverageStore);
  private destroyRef = inject(DestroyRef);

  beverageCatalog = this.beverageStore.catalog;
  isLoading = this.beverageStore.isLoading;
  beverageId: WritableSignal<string | null> = signal(null);
  beverage = computed(() => {
    return (
      this.beverageCatalog().find((b) => String(b.id) === this.beverageId()) ||
      null
    );
  });

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const beverageId = params.get('beverageId');
        if (beverageId) {
          this.beverageId.set(beverageId);
        }
      });
  }
}
