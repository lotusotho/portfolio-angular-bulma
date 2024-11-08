import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, NgIf],
  selector: 'app-knowledge',
  templateUrl: 'knowledge.component.html',
  styleUrl: 'knowledge.component.css',
})
export class KnowledgeComponent {
  hasScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = window.scrollY > 0;
  }
}
