import { Routes } from '@angular/router';

export const SEVENHOUSES_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./components/seven-houses-stepper/seven-houses-stepper.component').then(m => m.SevenHousesStepperComponent ) },
];
