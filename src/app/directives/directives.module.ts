import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { HighlightDirective } from './highlight/highlight.directive';

@NgModule({
  declarations: [DirectivesComponent, ButtonComponent, CardComponent, HighlightDirective],
  imports: [CommonModule],
  exports: [DirectivesComponent],
})
export class DirectivesModule {}
