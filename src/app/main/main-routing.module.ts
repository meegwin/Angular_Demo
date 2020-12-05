import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'movie/:movieId', component: MovieComponent },
    ],
  },

];

@NgModule({
  // Ngoại trừ AppRoutingModule sử dụng forRoot, tất cả RoutingModule khác đều sử dụng forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
