import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  supportedLangs = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    // add more languages here
  ];

  constructor(public readonly translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en'); //TODO maybe store in cookie and init read on load
    //TODO the wine or beverage cards need to return translated values form the backend
  }

  changeLanguage(event: Event) {
    const selectEl = event.target as HTMLSelectElement;
    this.translate.use(selectEl.value);
  }
}
