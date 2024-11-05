import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, CommonModule],
  selector: 'app-exp',
  templateUrl: 'experience.component.html',
  styleUrl: 'experience.component.css',
})
export class ExperienceComponent implements OnInit {
  hasScrolled = false;

  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = window.scrollY > 0;
  }
}
