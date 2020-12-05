import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule],
  exports: [MatButtonModule, MatCardModule, PaginationComponent],
})
export class ComponentsModule {}
