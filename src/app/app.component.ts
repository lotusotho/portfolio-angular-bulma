import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { LanguageService } from './services/language.service.js';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private languageService: LanguageService,
    private language: TranslateService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      if (!localStorage.getItem('lang')) {
        this.languageService.setLanguage('en');
        this.language.setDefaultLang('en');
      } else {
        const lang = localStorage.getItem('lang') || 'en';
        this.languageService.setLanguage(lang);
      }
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Page ready');
      AOS.init();
      AOS.refresh();
    }
  }
}
