import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cards } from '../interfaces';

@Component({
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  selector: 'app-knowledge',
  templateUrl: 'knowledge.component.html',
  styleUrl: 'knowledge.component.css',
})
export class KnowledgeComponent {
  hasScrolled = false;

  knowledgeCards: Cards[] = [
    {
      imgBig: '/assets/javaLogo.png',
      imgBigAlt: 'Logo Java',
      imgSmall: '/assets/sm/javaSmallLogo.png',
      imgSmallAlt: 'Mini logo Java',
      mainTitle: 'Java',
      subtitle: 'Conocimientos en el desarrollo con Java',
      description:
        'Conocimientos en el desarrollo con Java 21 y algoritmos para desarrollo de escritorio.',
      routerLink: '/exp-0',
    },
    {
      imgBig: '/assets/tsjsLogo.png',
      imgBigAlt: 'Logo Javascript | Typescript',
      imgSmall: '/assets/sm/jsSmallLogo.png',
      imgSmallAlt: 'Mini logo Javascript',
      mainTitle: 'Javascript | Typescript',
      subtitle: 'Desarrollo usando lenguajes como Javascript y Typescript',
      description:
        'Programación tanto en Typescript como Javascript tanto para backend como frontend usando Node.js y librerías como Express.js, React o frameworks como Angular.',
      routerLink: '/exp-1',
    },
    {
      imgBig: '/assets/angLogo.png',
      imgBigAlt: 'Logo Angular',
      imgSmall: '/assets/sm/angSmallLogo.png',
      imgSmallAlt: 'Mini logo Angular',
      mainTitle: 'Angular 18',
      subtitle:
        'Conocimientos y experiencias desarrollando páginas usando Angular 18',
      description:
        'Experiencia creando páginas web usando Angular 18 y Node.js con npm/pnpm.',
      routerLink: '/exp-2',
    },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = window.scrollY > 0;
  }
}
