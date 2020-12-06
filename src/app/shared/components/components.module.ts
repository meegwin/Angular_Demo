import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PaginationComponent } from './pagination/pagination.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [PaginationComponent, ErrorMessageComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule],
  exports: [
    MatButtonModule,
    MatCardModule,
    PaginationComponent,
    ErrorMessageComponent,
  ],
})
export class ComponentsModule {}
