import { Component } from '@angular/core';
import { Details } from '../interfaces';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgFor],
  selector: 'app-details',
  templateUrl: 'details.component.html',
  styleUrl: 'details.component.css',
})
export class DetailsComponent {
  DetailsInfo: Details[] = [
    {
      title: 'Java',
      image: '/assets/javaLogo.png',
      description: '',
      routerLink: 'knowledge',
    },
  ];
}
