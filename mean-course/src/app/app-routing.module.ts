import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from '../app/features/calculator/calculator.component';
import { DashboardComponent } from '../app/features/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { PostContainerComponent } from './features/posting/post-container.component';
import { PageNotFoundComponent } from './shared/layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'posting',
    component: PostContainerComponent,
  },
  {
    path: 'editPosting/:postId',
    component: PostContainerComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
