import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, OnDestroy } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'app-scroll',
  templateUrl: 'scroll.component.html',
  styleUrl: 'scroll.component.css',
})
export class ScrollComponent implements OnInit, OnDestroy {
  isBrowser: boolean;
  hasScrolled = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      window.addEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  onWindowScroll(): void {
    if (this.isBrowser) {
      this.hasScrolled = window.scrollY > 0;
    }
  }
}
