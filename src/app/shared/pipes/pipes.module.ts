import { NgModule } from '@angular/core';
import { SpellLevelPipe } from './spell-level.pipe';


@NgModule({
  declarations: [SpellLevelPipe],
  exports:      [SpellLevelPipe],
})
export class PipesModule { }
