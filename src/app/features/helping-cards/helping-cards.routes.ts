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
      import('./components/psych-support/psych-support.component').then(
        (m) => m.PsychSupportComponent,
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
    path: 'hub-suppor',
    loadComponent: () =>
      import('./components/down-support-hub/down-support-hub.component').then(
        (m) => m.DownSupportHubComponent,
      ),
  },
  {
    path: 'interactive-tools',
    loadComponent: () =>
      import('./components/interactive-tools/interactive-tools.component').then(
        (m) => m.InteractiveToolsComponent,
      ),
  },

];
