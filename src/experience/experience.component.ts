import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cards } from '../interfaces';
import { NgFor } from '@angular/common';
import { ScrollComponent } from '../scroll/scroll.component';

@Component({
  standalone: true,
  imports: [RouterLink, NgFor, ScrollComponent],
  selector: 'app-experience',
  templateUrl: 'experience.component.html',
  styleUrl: 'experience.component.css',
})
export class ExperienceComponent {
  ExperienceCards: Cards[] = [
    {
      imgBig: '/assets/tlpLogo.jpg',
      imgBigAlt: 'Logo TLP',
      imgSmall: '/assets/sm/routerSmallLogo.png',
      imgSmallAlt: 'Mini logo TLP',
      mainTitle: 'Administrador de sistemas',
      subtitle: 'TELEPALMA S.L - La Palma del Condado, Huelva - 2020',
      description: 'Programador de sistemas de fibra óptica basados en Linux.',
      routerLink: 'exp-0',
    },
    {
      imgBig: '/assets/ccarmenLogo.png',
      imgBigAlt: 'Logo Confitería del Carmen',
      imgSmall: '/assets/sm/devWebSmallLogo.png',
      imgSmallAlt: 'Mini logo Confitería del Carmen',
      mainTitle: 'Desarrollador Web',
      subtitle: 'CONFITERÍA DEL CARMEN, La Palma del Condado, Huelva - 2021',
      description:
        'Desarrollador de página web de ventas en Wordpress y camarero sirviendo cafés y desayunos.',
      routerLink: 'exp-1',
    },
    {
      imgBig: '/assets/tmbrLogo.png',
      imgBigAlt: 'Logo Timberfilms',
      imgSmall: '/assets/sm/riggerSmallLogo.png',
      imgSmallAlt: 'Mini logo Timberfilms',
      mainTitle: 'Artista técnico de personajes 3D',
      subtitle: 'TIMBERFILMS - Sevilla - 2022',
      description:
        'Rigger de personajes, creador de sistemas de movimiento para personajes 3D, y encargado del departamento de VFX y desarrollo técnico.',
      routerLink: 'exp-2',
    },
    {
      imgBig: '/assets/andreaPic.png',
      imgBigAlt: 'Imagen de proyecto de Telepalma',
      imgSmall: '/assets/sm/andreaSmallLogo.png',
      imgSmallAlt: 'Mini logo Telepalma',
      mainTitle: 'Programador y modelador 3D',
      subtitle: 'TELEPALMA S.L - La Palma del Condado, Huelva - 2023',
      description:
        'Director, programador y editor de vídeo en un proyecto de realidad virtual 3D.',
      routerLink: 'exp-3',
    },
    {
      imgBig: '/assets/guadalinfoPic.png',
      imgBigAlt: 'Logo Guadalinfo',
      imgSmall: '/assets/sm/guadalinfoSmallLogo.png',
      imgSmallAlt: 'Mini logo Guadalinfo',
      mainTitle: 'Dinamizador y gestor',
      subtitle: 'GUADALINFO - La Palma del Condado, Huelva - 2023',
      description:
        'Profesor de cursos de ofimática tanto para adultos como niños, y ayudante de gestiones administrativas a múltiples entidades.',
      routerLink: 'exp-4',
    },
  ];
}
