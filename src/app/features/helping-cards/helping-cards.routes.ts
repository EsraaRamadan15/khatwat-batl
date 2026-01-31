import { Routes } from '@angular/router';

export const Helping_CARDS_ROUTES: Routes = [
  {
    path: 'pre-marriage',
    loadComponent: () =>
      import('./components/pre-marriage-chapter/pre-marriage-chapter.component').then(
        (m) => m.PreMarriageChapterComponent,
      ),
  },
  {
    path: 'pregnancy',
    loadComponent: () =>
      import('./components/pregnancy-chapter/pregnancy-chapter.component').then(
        (m) => m.PregnancyChapterComponent,
      ),
  },
  {
    path: 'psych-support',
    loadComponent: () =>
      import('./components/network-support/network-support.component').then(
        (m) => m.NetworkSupportComponent,
      ),
  },
  {
    path: 'education-support',
    loadComponent: () =>
      import('./components/education-support/education-support.component').then(
        (m) => m.EducationSupportComponent,
      ),
  },
  {
    path: 'nutrition-support',
    loadComponent: () =>
      import('./components/down-nutrition-guide/down-nutrition-guide.component').then(
        (m) => m.DownNutritionGuideComponent,
      ),
  },
  {
    path: 'health-support',
    loadComponent: () =>
      import('./components/health-support/health-support.component').then(
        (m) => m.HealthSupportComponent,
      ),
  },
  {
    path: 'interactive-tools',
    loadComponent: () =>
      import('./components/interactive-tools/interactive-tools.component').then(
        (m) => m.InteractiveToolsComponent,
      ),
  },
  {
    path: 'mental-support',
    loadComponent: () =>
      import('./components/mental-support/mental-support.component').then(
        (m) => m.MentalSupportComponent,
      ),
  },
];
