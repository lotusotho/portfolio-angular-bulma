import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Details } from '../../interfaces';
import { NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [NgIf, TranslateModule, RouterLink],
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css'],
})
export class DetailsComponent implements OnInit {
  Details: Details[] | undefined;
  Index: number | undefined;
  baseRoute: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      const path = url.join('/');
      let translationKey = '';

      if (path.startsWith('experience')) {
        this.baseRoute = '/experience';
        translationKey = 'details-exp';
      } else if (path.startsWith('education')) {
        this.baseRoute = '/education';
        translationKey = 'details-edu';
      } else if (path.startsWith('knowledge')) {
        this.baseRoute = '/knowledge';
        translationKey = 'details-know';
      }

      if (translationKey) {
        this.translate.get(translationKey).subscribe(
          (data: Details[]) => {
            this.Details = data;
            const indexPart = path.split('-')[1];
            this.Index = indexPart ? parseInt(indexPart, 10) : undefined;
          },
          (error) => {
            console.error(
              `Error loading translations for key: ${translationKey}`,
              error
            );
          }
        );
      }
    });
  }
}
