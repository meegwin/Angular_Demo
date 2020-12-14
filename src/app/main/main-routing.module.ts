import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LayoutComponent } from './layout/layout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { SignupGuard } from '../core/guards/signup.guard';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'movie/:movieId', component: MovieComponent },
      { path: 'signin', component: SigninComponent },
      {
        path: 'signup',
        canDeactivate: [SignupGuard],
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  // Ngoại trừ AppRoutingModule sử dụng forRoot, tất cả RoutingModule khác đều sử dụng forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
