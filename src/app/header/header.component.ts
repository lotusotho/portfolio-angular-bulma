import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
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
  faStarOfLife,
  faFeather,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageToggleComponent } from '../translatetoggle/translatetoggle.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FontAwesomeModule,
    TranslateModule,
    LanguageToggleComponent,
  ],
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.css',
})
export class HeaderComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  @ViewChild('navLogo') navLogo!: ElementRef;
  @ViewChild('navBurger') navBurger!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('navDropdown1') navDropdown1!: ElementRef;
  @ViewChild('navDropdown2') navDropdown2!: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  toggleLogo() {
    this.navBurger.nativeElement.classList.remove('is-active');
    this.navMenu.nativeElement.classList.remove('is-active');
  }

  toggleDropdown1() {
    this.navDropdown1.nativeElement.classList.toggle('is-active');
    this.navDropdown2.nativeElement.classList.remove('is-active');
    this.navBurger.nativeElement.classList.remove('is-active');
    this.navMenu.nativeElement.classList.remove('is-active');
  }

  toggleDropdown2() {
    this.navDropdown2.nativeElement.classList.toggle('is-active');
    this.navDropdown1.nativeElement.classList.remove('is-active');
    this.navBurger.nativeElement.classList.remove('is-active');
    this.navMenu.nativeElement.classList.remove('is-active');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const targetElement = event.target as HTMLElement;
    const clickedInsideDropdown1 =
      this.navDropdown1.nativeElement.contains(targetElement);
    const clickedInsideDropdown2 =
      this.navDropdown2.nativeElement.contains(targetElement);

    if (!clickedInsideDropdown1 && !clickedInsideDropdown2) {
      this.navDropdown1.nativeElement.classList.remove('is-active');
      this.navDropdown2.nativeElement.classList.remove('is-active');
    }
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
  projectsIcon = faStarOfLife;
  blogMapachesIcon = faFeather;
  indexMapachesIcon = faNetworkWired;
}
