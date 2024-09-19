import { Routes } from '@angular/router';
import { AboutComponent } from './module/about/about.component';
import { ExperienceComponent } from './module/experience/experience.component';
import { SkillsComponent } from './module/skills/skills.component';
import { EducationComponent } from './module/education/education.component';
import { ContactComponent } from './module/contact/contact.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'education', component: EducationComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/about', pathMatch: 'full' }
];

