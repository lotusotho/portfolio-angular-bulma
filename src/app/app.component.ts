import { Component, Inject, PLATFORM_ID, ngOnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements ngOnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('DOMContentLoaded', () => {
        console.log('doc loaded');
        console.log('Page ready');
        AOS.init();
        AOS.refresh();
      });
    }
  }
}
