import { NgModule } from '@angular/core';
import { CardComponent } from './card';
import { IconComponent } from './icon';
import { MagicTextComponent } from './magic-text/magic-text.component';

@NgModule({
  imports: [CardComponent, IconComponent, MagicTextComponent],
  exports: [CardComponent, IconComponent, MagicTextComponent],
})
export class ComponentsModule {}
