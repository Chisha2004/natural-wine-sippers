import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { finalize, pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { BeverageService } from './beverage.service';
import { Beverage } from '../../models/beverage.interface';

type BeverageState = {
  catalog: Beverage[];
  isLoading: boolean;
  error: string | null;
};

const initialState: BeverageState = {
  catalog: [],
  isLoading: false,
  error: null,
};

export const BeverageStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, beverageService = inject(BeverageService)) => ({
    loadCatalog: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true, error: null })),
        switchMap(() =>
          beverageService.getCatalog().pipe(
            tapResponse({
              next: (catalog: Beverage[]) =>
                patchState(store, {
                  catalog,
                  error: null,
                }),
              error: () =>
                patchState(store, {
                  error: 'Technical error occurred while loading catalog.',
                }),
            }),
            finalize(() => patchState(store, { isLoading: false }))
          )
        )
      )
    ),
  }))
);
