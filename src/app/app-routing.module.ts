import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap8Component } from './baitap8/baitap8.component';

const routes: Routes = [
  { path: 'baitap2', component: Baitap2Component },
  { path: 'baitap8', component: Baitap8Component },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
