import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cards } from '../../interfaces';
import { NgFor, NgIf } from '@angular/common';
import { ScrollComponent } from '../scroll/scroll.component.js';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, ScrollComponent, TranslateModule],
  selector: 'app-experience',
  templateUrl: 'experience.component.html',
  styleUrl: 'experience.component.css',
})
export class ExperienceComponent implements OnInit {
  ExperienceCards: Cards[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.get('cards-exp').subscribe(
      (data: Cards[]) => {
        this.ExperienceCards = data;
      },
      (error) => {
        console.error('Error loading cards-exp translations', error);
      }
    );
  }
}
