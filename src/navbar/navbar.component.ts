import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAt,
  faAtom,
  faBook,
  faHouse,
  faIdCard,
  faQuestion,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, FontAwesomeModule],
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrl: 'navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('navLogo') navLogo!: ElementRef;
  @ViewChild('navBurger') navBurger!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  toggleLogo() {
    this.navBurger.nativeElement.classList.remove('is-active');
    this.navMenu.nativeElement.classList.remove('is-active');
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

  // Icons
  homeIcon = faHouse;
  expIcon = faStar;
  eduIcon = faBook;
  knowIcon = faAtom;
  aboutIcon = faQuestion;
  cotactIcon = faAt;
  cvIcon = faIdCard;
  githubIcon = faGithubAlt;
  linkedinIcon = faLinkedin;
}
