import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeverageStore } from './services/beverage/beverage.store';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly beverageStore = inject(BeverageStore);
  private readonly translate = inject(TranslateService);
  private destroyRef = inject(DestroyRef);

  private readonly LANGUAGE_STORAGE_KEY = 'lang';

  constructor() {
    //TODO maybe store in cookie and init read on load
    this.translate.setDefaultLang('en');
    const savedLang = localStorage.getItem(this.LANGUAGE_STORAGE_KEY);
    let activeLang: string;

    if (savedLang && (savedLang === 'en' || savedLang === 'de')) {
      activeLang = savedLang;
    } else {
      // 2. Fall back to browser detection or English if nothing is saved
      const browserLang = this.translate.getBrowserLang();
      activeLang = browserLang?.match(/en|de/) ? browserLang : 'en';

      localStorage.setItem(this.LANGUAGE_STORAGE_KEY, activeLang);
    }

    // Set the language across your pages
    this.translate.use(activeLang);

    // 3. Listen to language changes to keep localStorage synchronized
    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        localStorage.setItem(this.LANGUAGE_STORAGE_KEY, event.lang);
      });
  }

  ngOnInit(): void {
    this.beverageStore.loadCatalog();
  }
}
