import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';
import { IconModule } from './icon/icon.module';

@NgModule({
  exports: [CardModule, IconModule],
})
export class ComponentsModule {}
