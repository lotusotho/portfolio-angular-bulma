import { Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { KnowledgeComponent } from '../knowledge/knowledge.component';
import { ExperienceComponent } from '../experience/experience.component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'experience',
        component: ExperienceComponent,
      },
      {
        path: 'knowledge',
        component: KnowledgeComponent,
      },
    ],
  },
];
