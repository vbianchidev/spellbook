import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PipesModule } from '../pipes/pipes.module';
import { CardModule } from './card/card.module';
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
    MatToolbarModule,
    CardModule
  ],
  declarations: [IconComponent, ListComponent],
  exports:      [CardModule, IconComponent, ListComponent],
})
export class ComponentsModule { }
