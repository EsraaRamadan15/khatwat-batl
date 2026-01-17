import { Routes } from '@angular/router';

export const Helping_CARDS_ROUTES: Routes = [
  { path: 'pre-marriage', loadComponent: () => import('./components/pre-marriage-chapter/pre-marriage-chapter.component').then(m => m.PreMarriageChapterComponent ) },
    { path: 'pregnancy', loadComponent: () => import('./components/pregnancy-chapter/pregnancy-chapter.component').then(m => m.PregnancyChapterComponent ) },
    { path: 'psych-support', loadComponent: () => import('./components/psych-support/psych-support.component').then(m => m.PsychSupportComponent ) },
];
