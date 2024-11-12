import { Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { KnowledgeComponent } from '../knowledge/knowledge.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { DetailsComponent } from '../details/details.component';

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
        path: 'education',
        component: EducationComponent,
      },
      {
        path: 'knowledge',
        component: KnowledgeComponent,
      },
      {
        path: 'experience/exp-0',
        component: DetailsComponent,
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
];
