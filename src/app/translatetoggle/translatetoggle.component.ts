import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service.js';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-toggle',
  imports: [TranslateModule],
  standalone: true,
  templateUrl: 'translatetoggle.component.html',
  styleUrl: 'translatetoggle.component.css',
})
export class LanguageToggleComponent {
  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  switchLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
    window.location.reload();
  }
}
