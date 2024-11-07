import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
})
export class LayoutComponent {}
