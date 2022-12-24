import { NgModule } from '@angular/core';

import { DiceComponent } from './dice/dice.component';
import { IconComponent } from './icon';
import { LogoComponent } from './logo/logo.component';
import { MagicTextComponent } from './magic-text/magic-text.component';

@NgModule({
  imports: [IconComponent, MagicTextComponent, DiceComponent, LogoComponent],
  exports: [IconComponent, MagicTextComponent, DiceComponent, LogoComponent],
})
export class ComponentsModule {}
