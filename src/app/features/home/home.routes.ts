import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'refrences', loadComponent: () => import('./components/references-tabs/references-tabs.component').then(m => m.ReferencesTabsComponent) },
  { path: 'down-kids', loadComponent: () => import('./components/down-band/down-chapter-timeline/down-chapter-timeline.component').then(m => m.DownChapterTimelineComponent) },
  { path: 'autism-kids', loadComponent: () => import('./components/autism-band/autism-dsm-chapter/autism-dsm-chapter.component').then(m => m.AutismDsmChapterComponent) },

];
