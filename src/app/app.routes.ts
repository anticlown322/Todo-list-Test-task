import { Routes } from '@angular/router';
import { Home } from './modules/home/home.js';
import { Layout } from './shared/components/layout/layout.js';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [{ path: '', component: Home }],
  },
];
