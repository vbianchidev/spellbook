import { NgModule } from '@angular/core';
import { SpellLevelPipe } from './spell-level.pipe';
import { AlphabeticOrdenationPipe } from './alphabetic-ordenation.pipe';
import { GroupByPipe } from './group-by.pipe';

@NgModule({
  declarations: [SpellLevelPipe, AlphabeticOrdenationPipe, GroupByPipe],
  exports: [SpellLevelPipe, AlphabeticOrdenationPipe, GroupByPipe],
})
export class PipesModule {}
