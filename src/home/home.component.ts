import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@Component({
  standalone: true,
  imports: [NgxTypedWriterModule, CommonModule],
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent {
  hasScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = window.scrollY > 0;
  }
}
