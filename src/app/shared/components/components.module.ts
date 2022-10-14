import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { IconComponent } from './icon/icon.component';
import { SpellLevelPipe } from '../pipes/spell-level.pipe';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  imports: [
    PipesModule,
    CommonModule, 
    FontAwesomeModule, 
    MatCardModule, 
    MatChipsModule,
  ],
  declarations: [CardComponent, IconComponent],
  exports:      [CardComponent, IconComponent],
})
export class ComponentsModule { }
