import { NgModule } from '@angular/core';
import { GroupByPipe } from './group-by.pipe';
import { SpellLevelPipe } from './spell-level.pipe';

@NgModule({
  declarations: [SpellLevelPipe, GroupByPipe],
  exports: [SpellLevelPipe, GroupByPipe],
})
export class PipesModule {}
