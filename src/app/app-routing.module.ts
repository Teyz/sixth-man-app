import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'actualites',
    loadChildren: () => import('./modules/general/actualites/actualites.module')
      .then(mod => mod.ActualitesModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./modules/general/stats/stats.module')
      .then(mod => mod.StatsModule)
  },
  {
    path: 'compare',
    loadChildren: () => import('./modules/general/compare/compare.module')
      .then(mod => mod.CompareModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/general/login/signin.module')
      .then(mod => mod.SigninModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/general/register/register.module')
      .then(mod => mod.RegisterModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/general/dashboard/dashboard.module')
      .then(mod => mod.DashboardModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }