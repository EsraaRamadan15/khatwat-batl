import { Routes } from '@angular/router';
import { ShellComponent } from './core/layout/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES) },
    //  { path: 'start', loadChildren: () => import('./features/start/start.routes').then(m => m.START_ROUTES) },

    //   { path: 'pre-marriage', loadChildren: () => import('./features/pre-marriage/pre-marriage.routes').then(m => m.PRE_MARRIAGE_ROUTES) },
    //   { path: 'pregnancy', loadChildren: () => import('./features/pregnancy/pregnancy.routes').then(m => m.PREGNANCY_ROUTES) },

    //   { path: 'down', loadChildren: () => import('./features/down/down.routes').then(m => m.DOWN_ROUTES) },
    //   { path: 'autism', loadChildren: () => import('./features/autism/autism.routes').then(m => m.AUTISM_ROUTES) },

    //   { path: 'program', loadChildren: () => import('./features/program/program.routes').then(m => m.PROGRAM_ROUTES) },

    //   { path: 'tools', loadChildren: () => import('./features/tools/tools.routes').then(m => m.TOOLS_ROUTES) },
    //   { path: 'references', loadChildren: () => import('./features/references/references.routes').then(m => m.REF_ROUTES) },
    ],
  },
  { path: '**', redirectTo: '' }
];

