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
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
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
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }