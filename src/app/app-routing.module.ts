import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

// import { Baitap2Component } from './baitap2/baitap2.component';
// import { Baitap8Component } from './baitap8/baitap8.component';
// import { MovieComponent } from './movie/movie.component';
// import { ShoppingComponent } from './shopping/shopping.component';

// import { MainModule } from './main/main.module';
// import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  // Cách 1: Routing theo component
  // { path: 'baitap2', component: Baitap2Component },
  // { path: 'baitap8', component: Baitap8Component },
  // { path: 'movie', component: MovieComponent },
  // { path: 'shopping', component: ShoppingComponent },

  // Cách 2: Routing theo module
  // pathMatch: full <=> exact bên React
  // => url: /movie không load được vào MainModule
  // { path: '', pathMatch: 'full', loadChildren: () => MainModule },
  // Lazy loading: Chỉ import module khi load tới path tương ứng
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
