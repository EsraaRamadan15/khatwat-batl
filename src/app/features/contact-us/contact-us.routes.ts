import { Routes } from '@angular/router';

export const CONTACTUS_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./components/contact-us/contact-us.component').then(m => m.ContactFormComponent ) },

];
