import { Routes } from '@angular/router';

export const Helping_CARDS_ROUTES: Routes = [
  { path: 'pre-marriage', loadComponent: () => import('./components/pre-marriage-chapter/pre-marriage-chapter.component').then(m => m.PreMarriageChapterComponent ) },
];
