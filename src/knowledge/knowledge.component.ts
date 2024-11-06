import { NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, NgIf],
  selector: 'app-knowledge',
  templateUrl: 'knowledge.component.html',
})
export class KnowledgeComponent implements OnInit {
  hasScrolled = false;

  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = window.scrollY > 0;
  }
}
