import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Details } from '../../interfaces';
import {
  ExperienceDetails,
  EducationDetails,
  KnowledgeDetails,
} from './details.storage';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, RouterLink],
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css'],
})
export class DetailsComponent implements OnInit {
  Details: Details[] | undefined;
  Index: number | undefined;
  baseRoute: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      const path = url.join('/');
      if (path.startsWith('experience')) {
        this.Details = ExperienceDetails;
        this.Index = parseInt(path.split('-')[1], 10);
        this.baseRoute = '/experience';
      } else if (path.startsWith('education')) {
        this.Details = EducationDetails;
        this.Index = parseInt(path.split('-')[1], 10);
        this.baseRoute = '/education';
      } else if (path.startsWith('knowledge')) {
        this.Details = KnowledgeDetails;
        this.Index = parseInt(path.split('-')[1], 10);
        this.baseRoute = '/knowledge';
      }
    });
  }
}
