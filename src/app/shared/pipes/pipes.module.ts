import { NgModule } from '@angular/core';
import { SpellLevelPipe } from './spell-level.pipe';
import { AlphabeticOrdenationPipe } from './alphabetic-ordenation.pipe';
import { LevelOrdenationPipe } from './level-ordenation.pipe';

@NgModule({
  declarations: [SpellLevelPipe, AlphabeticOrdenationPipe, LevelOrdenationPipe],
  exports: [SpellLevelPipe, AlphabeticOrdenationPipe, LevelOrdenationPipe],
})
export class PipesModule {}
