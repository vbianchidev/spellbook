import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellCardComponent } from './spell-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [SpellCardComponent],
  imports: [CommonModule, FontAwesomeModule, MatCardModule, MatChipsModule],
  exports: [SpellCardComponent],
})
export class SpellCardModule {}
