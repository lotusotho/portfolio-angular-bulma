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
}
