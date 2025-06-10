// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Aboutme } from './aboutme/aboutme';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'about', component: Aboutme },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects }
];