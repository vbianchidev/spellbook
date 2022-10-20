import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PipesModule } from '../../pipes/pipes.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
