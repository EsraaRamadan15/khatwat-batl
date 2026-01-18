import { Routes } from '@angular/router';

export const SEVENHOUSES_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/seven-houses-main.component/seven-houses-main.component').then(m => m.SevenHousesMainComponent ) },
];
