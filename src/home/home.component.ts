import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
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
      ' interactivos. Especializado en JavaScript, Java y frameworks como Angular,' +
      ' también maneja motores gráficos como Blender. Su enfoque' +
      ' autodidacta y habilidades en trabajo en equipo destacan en proyectos' +
      ' tecnológicos y creativos.',
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.hasScrolled = window.scrollY > 0;
  }

  showToast() {
    const toast = document.createElement('div');
    toast.className = 'toast notification is-success title is-5 has-text-black';
    toast.style.position = 'fixed';
    toast.style.top = '10%';
    toast.style.left = '50%';
    toast.style.transform = 'translate(-50%, -50%)';
    toast.style.zIndex = '1000';
    toast.style.padding = '10px';
    toast.style.border = '2px solid #6effbe';
    toast.innerText = '¡Gracias! 😄👍';

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
}
