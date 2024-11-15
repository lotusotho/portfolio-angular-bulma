import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgxTimelineModule,
  NgxTimelineEventGroup,
  NgxTimelineOrientation,
  NgxTimelineEventChangeSide,
} from '@frxjs/ngx-timeline';

@Component({
  standalone: true,
  imports: [RouterLink, NgxTimelineModule, CommonModule],
  selector: 'app-education',
  templateUrl: 'education.component.html',
  styleUrl: 'education.component.css',
})
export class EducationComponent {
  hasScrolled = false;

  events = [
    {
      timestamp: new Date('2024-01-01'),
      title: 'Desarrollo de Aplicaciones Web (DAW)',
      smallTitle: 'DAW',
      description:
        'ADA-ITS - Sevilla, 2024 - Ahora. Desarrollo de Aplicaciones Web',
      id: 'edu-0',
      imageUrl: '/assets/adaitsLogo.png',
      routerLink: 'edu-0',
    },
    {
      timestamp: new Date('2020-09-01'),
      title: 'Animación 3D, Juegos y Entornos Interactivos',
      smallTitle: 'A3D',
      description:
        'CENTRO UNIVERSITARIO EUSA - Sevilla, 2020-2022. Animación 3D, Juegos y Entornos Interactivos',
      id: 'edu-1',
      imageUrl: '/assets/eusaLogo.png',
      routerLink: 'edu-1',
    },
    {
      timestamp: new Date('2017-09-01'),
      title: 'Sistemas Microinformáticos y Redes',
      smallTitle: 'SMR',
      description:
        'IES DELGADO HERNÁNDEZ, Bollullos Par Del Condado - 2017-2019. Sistemas Microinformáticos y Redes',
      id: 'edu-2',
      imageUrl: '/assets/dhPic.png',
      routerLink: 'edu-2',
    },
  ];

  groupEvent = NgxTimelineEventGroup.YEAR;
  orientation = NgxTimelineOrientation.VERTICAL;
  changeSide = NgxTimelineEventChangeSide.ALL;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = window.scrollY > 0;
  }
}
