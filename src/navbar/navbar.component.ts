import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, FontAwesomeModule],
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrl: 'navbar.component.css',
})
export class NavbarComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('DOMContentLoaded', () => {
        const $navbarBurgers = Array.from(
          document.querySelectorAll('.navbar-burger')
        );

        const $navbarMenus = Array.from(
          document.querySelectorAll('.navbar-menu')
        );

        const $dropdowns = Array.from(
          document.querySelectorAll('.navbar-item.has-dropdown')
        );

        // Toggle navbar-burger
        $navbarBurgers.forEach((el) => {
          el.addEventListener('click', () => {
            const target = el.getAttribute('data-target');
            const $target = document.getElementById(target!);

            el.classList.toggle('is-active');
            $target?.classList.toggle('is-active');
          });
        });

        // Close navbar on outside click
        document.addEventListener('click', (event) => {
          const targetElement = event.target as Node;

          // Close burger if clicked outside of navbar and dropdown
          const isClickInsideDropdown = $dropdowns.some((dropdown) =>
            dropdown.contains(targetElement)
          );

          const isClickInsideNavbarBurger = $navbarBurgers.some((burger) =>
            burger.contains(targetElement)
          );

          if (!isClickInsideDropdown && !isClickInsideNavbarBurger) {
            $navbarBurgers.forEach((burger) =>
              burger.classList.remove('is-active')
            );
            $navbarMenus.forEach((menu) => menu.classList.remove('is-active'));
          }
        });

        // Toggle dropdown
        $dropdowns.forEach((dropdown) => {
          const $dropdownLink = dropdown.querySelector('.navbar-link');

          $dropdownLink?.addEventListener('click', (event) => {
            event.preventDefault();
            dropdown.classList.toggle('is-active');
          });

          document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target as Node)) {
              dropdown.classList.remove('is-active');
            }
          });
        });
      });
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

  githubIcon = faGithubAlt;
}
