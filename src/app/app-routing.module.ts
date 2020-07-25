import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'forgot-password',
    loadChildren: () => import('./modules/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },

  {
    path: 'setup-profile',
    loadChildren: () => import('./modules/setup-profile/setup-profile.module').then(m => m.SetupProfileModule)
  },

  {
    path: 'create-account',
    loadChildren: () => import('./modules/create-account/create-account.module').then(m => m.CreateAccountModule)
  },

  {
    path: '',
    redirectTo: '/create-account',
    pathMatch: 'full'
  },

  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
