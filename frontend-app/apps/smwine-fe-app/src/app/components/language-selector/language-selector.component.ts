import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  private translateService = inject(TranslateService);

  currentLang = this.translateService.currentLang;
  supportedLangs = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    // add more languages here
  ];

  changeLanguage(event: Event) {
    const selectEl = event.target as HTMLSelectElement;
    this.translateService.use(selectEl.value);
  }
}
