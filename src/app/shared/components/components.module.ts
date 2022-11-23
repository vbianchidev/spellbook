import { NgModule } from '@angular/core';
import { CardComponent } from './card';
import { IconComponent } from './icon';
import { MagicTextComponent } from './magic-text/magic-text.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [CardComponent, IconComponent, MagicTextComponent, LogoComponent],
  exports: [CardComponent, IconComponent, MagicTextComponent, LogoComponent],
})
export class ComponentsModule {}
