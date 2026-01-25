import { Routes } from '@angular/router';

export const COMMUNITY_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/community-section.component/community-section.component').then(m => m.CommunitySectionComponent ) },

];
