import { Routes } from '@angular/router';
import { ShellComponent } from './core/layout/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES) },
     { path: 'seven-houses', loadChildren: () => import('./features/seven-houses-stepper/seven-houses.routes').then(m => m.SEVENHOUSES_ROUTES) },

      { path: 'cards', loadChildren: () => import('./features/helping-cards/helping-cards.routes').then(m => m.Helping_CARDS_ROUTES) },
      { path: 'stories', loadChildren: () => import('./features/stories/stories.routes').then(m => m.STORIES_ROUTES) },

    //   { path: 'down', loadChildren: () => import('./features/down/down.routes').then(m => m.DOWN_ROUTES) },
    //   { path: 'autism', loadChildren: () => import('./features/autism/autism.routes').then(m => m.AUTISM_ROUTES) },

    //   { path: 'program', loadChildren: () => import('./features/program/program.routes').then(m => m.PROGRAM_ROUTES) },

    //   { path: 'tools', loadChildren: () => import('./features/tools/tools.routes').then(m => m.TOOLS_ROUTES) },
    //   { path: 'references', loadChildren: () => import('./features/references/references.routes').then(m => m.REF_ROUTES) },
    ],
  },
  { path: '**', redirectTo: '' }
];

