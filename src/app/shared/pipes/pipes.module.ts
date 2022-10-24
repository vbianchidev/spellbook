import { NgModule } from '@angular/core';
import { GroupByPipe } from './group-by.pipe';
import { IsCantripPipe } from './is-cantrip.pipe';

@NgModule({
  declarations: [IsCantripPipe, GroupByPipe],
  exports: [IsCantripPipe, GroupByPipe],
})
export class PipesModule {}
