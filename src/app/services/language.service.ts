import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(
    private translate: TranslateService,
    private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  setLanguage(lang: string): void {
    this.translate.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      this.cookieService.set('lang', lang, 31536000);
    }
  }
}
