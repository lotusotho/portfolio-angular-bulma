import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
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

        $navbarBurgers.forEach((el) => {
          el.addEventListener('click', () => {
            const target = el.getAttribute('data-target');
            const $target = document.getElementById(target!);

            el.classList.toggle('is-active');
            $target?.classList.toggle('is-active');
          });
        });

        const $menuLinks = Array.from(
          document.querySelectorAll('.navbar-menu a')
        );

        $menuLinks.forEach((link) => {
          link.addEventListener('click', () => {
            const $navbarBurgers = Array.from(
              document.querySelectorAll('.navbar-burger')
            );
            $navbarBurgers.forEach((burger) => {
              burger.classList.remove('is-active');
            });

            const $navbarMenus = Array.from(
              document.querySelectorAll('.navbar-menu')
            );
            $navbarMenus.forEach((menu) => {
              menu.classList.remove('is-active');
            });
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
}
