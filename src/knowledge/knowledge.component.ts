import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cards } from '../interfaces';
import { ScrollComponent } from '../scroll/scroll.component';
import { AppComponent } from '../app/app.component';

@Component({
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, ScrollComponent, AppComponent],
  selector: 'app-knowledge',
  templateUrl: 'knowledge.component.html',
  styleUrl: 'knowledge.component.css',
})
export class KnowledgeComponent {
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
      routerLink: 'know-0',
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
      routerLink: 'know-1',
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
      routerLink: 'know-2',
    },
    {
      imgBig: '/assets/ubudebLogo.png',
      imgBigAlt: 'Logo Debian/Ubuntu',
      imgSmall: '/assets/sm/linuxSmallLogo.png',
      imgSmallAlt: 'Mini logo Linux',
      mainTitle: 'Sistemas Linux (Basados en Debian)',
      subtitle:
        'Conocimientos y experiencia en la creación de servidores basados en Linux',
      description:
        'Experiencia en sistemas Linux ( Debian, Ubuntu y Ubuntu Server, etc)',
      routerLink: 'know-3',
    },
    {
      imgBig: '/assets/vmLogo.png',
      imgBigAlt: 'Logo Debian/Ubuntu',
      imgSmall: '/assets/sm/vmSmallLogo.png',
      imgSmallAlt: 'Mini logo VMs',
      mainTitle: 'VMWare, VirtualBox y Qemu (KVM)',
      subtitle: 'Uso de VMWare, VirtualBox y Qemu',
      description:
        'Experiencia utilizado máquinas virtuales como VMWare, VirtualBox y QEMU/KVM',
      routerLink: 'know-4',
    },
    {
      imgBig: '/assets/gitLogo.png',
      imgBigAlt: 'Logo Git',
      imgSmall: '/assets/sm/vmSmallLogo.png',
      imgSmallAlt: 'Mini logo VMs',
      mainTitle: 'Git',
      subtitle: 'Conocimiento de control de versiones usando Git',
      description:
        ' Uso de Git y GitFlow para el versionamiento y tabajo continuo',
      routerLink: 'know-5',
    },
  ];
}
