import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PipesModule } from '../pipes/pipes.module';
import { CardComponent } from './card/card.component';
import { IconComponent } from './icon/icon.component';
import { ListComponent } from './list/list.component';



@NgModule({
  imports: [
    PipesModule,
    CommonModule, 
    FontAwesomeModule, 
    MatIconModule,
    MatListModule,
    MatCardModule, 
    MatChipsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [CardComponent, IconComponent, ListComponent],
  exports:      [CardComponent, IconComponent, ListComponent],
})
export class ComponentsModule { }
