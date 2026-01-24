import { Routes } from '@angular/router';

export const STORIES_ROUTES: Routes = [
  // list/section could be inside home, but add routes for stories:
  {
    path: 'story/:id',
    loadComponent: () =>
      import('./pages/story-details/story-details.component').then(
        (m) => m.StoryDetailsComponent
      ),
  },
  // optional "all stories" page later:
  { path: '', loadComponent: () => import('./pages/stories-list/stories-list.component').then(m => m.StoriesListComponent) }
];
