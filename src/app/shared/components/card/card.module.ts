import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IconModule } from '@components/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PipesModule } from '../../pipes/pipes.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatCardModule,
    PipesModule,
    IconModule,
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
