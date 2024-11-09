import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { Home } from '../interfaces';

@Component({
  standalone: true,
  imports: [NgxTypedWriterModule, CommonModule],
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent {
  hasScrolled = false;

  home: Home = {
    title: 'Alejandro Ramos Casado',
    pageDescription: 'Página de presentación personal',
    imgPfp: '/assets/pfp.jpg',
    imgPfpAlt: 'Profile Picture Hero',
    phrases: ['programador', 'administrador', 'artista técnico', 'riggeador'],
    description:
      'Alejandro Ramos Casado es programador web y artista técnico, con' +
      ' experiencia en desarrollo de aplicaciones, entornos 3D y sistemas' +
      ' interactivos. Especializado en JavaScript, Java y frameworks como React,' +
      ' también maneja motores gráficos como Blender y Godot. Su enfoque' +
      ' autodidacta y habilidades en trabajo en equipo destacan en proyectos' +
      ' tecnológicos y creativos.',
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = window.scrollY > 0;
  }
}
