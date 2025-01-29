import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cards } from '../../interfaces';
import { ScrollComponent } from '../scroll/scroll.component.js';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, ScrollComponent, TranslateModule],
  selector: 'app-knowledge',
  templateUrl: 'knowledge.component.html',
  styleUrl: 'knowledge.component.css',
})
export class KnowledgeComponent implements OnInit {
  KnowledgeCards: Cards[] = [];
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('cards-know').subscribe(
      (data: Cards[]) => {
        this.KnowledgeCards = data;
      },
      (error) => {
        console.error('Error loading cards-know translations', error);
      }
    );
  }
}
