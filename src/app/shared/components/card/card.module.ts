import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '@components/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '@shared/material/material.module';

import { PipesModule } from '../../pipes/pipes.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    // My Modules
    IconModule,
    PipesModule,
    MaterialModule,
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
