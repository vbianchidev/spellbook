import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PipesModule } from '../pipes/pipes.module';
import { CardComponent } from './card/card.component';
import { IconComponent } from './icon/icon.component';



@NgModule({
  imports: [
    PipesModule,
    CommonModule, 
    FontAwesomeModule, 
    MatCardModule, 
    MatChipsModule,
    MatTableModule,
  ],
  declarations: [CardComponent, IconComponent],
  exports:      [CardComponent, IconComponent],
})
export class ComponentsModule { }
