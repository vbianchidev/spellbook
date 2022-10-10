import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';



@NgModule({
  imports: [
    CommonModule, 
    FontAwesomeModule, 
    MatCardModule, 
    MatChipsModule
  ],
  declarations: [CardComponent],
  exports:      [CardComponent],
})
export class ComponentsModule { }
