import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'refrences', loadComponent: () => import('./components/references-tabs/references-tabs.component').then(m => m.ReferencesTabsComponent) },
];
