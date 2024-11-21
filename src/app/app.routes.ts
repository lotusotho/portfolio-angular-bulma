import { Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { DetailsComponent } from '../details/details.component';
import {
  ExperienceDetails,
  EducationDetails,
  KnowledgeDetails,
} from '../details/details.storage';
import { Details } from '../interfaces';
import { KnowledgeComponent } from '../knowledge/knowledge.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

const experienceRoutes = ExperienceDetails.map((detail: Details, index) => ({
  path: `experience/exp-${index}`,
  component: DetailsComponent,
}));

const educationRoutes = EducationDetails.map((detail: Details, index) => ({
  path: `education/edu-${index}`,
  component: DetailsComponent,
}));

const knowledgeRoutes = KnowledgeDetails.map((detail: Details, index) => ({
  path: `knowledge/know-${index}`,
  component: DetailsComponent,
}));

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
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
      ...experienceRoutes,
      ...educationRoutes,
      ...knowledgeRoutes,
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
];
