import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../shared/components/components.module';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [LayoutComponent, UsersComponent, MoviesComponent],
  imports: [CommonModule, AdminRoutingModule, ComponentsModule],
})
export class AdminModule {}
