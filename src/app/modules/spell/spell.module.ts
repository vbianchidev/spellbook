import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BianchiUiModule } from 'projects/bianchi-ui/src/public-api';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpellResolver } from './providers/spell.resolver';
import { SpellService } from './providers/spell.service';

import { SpellRoutingModule } from './spell-routing.module';

@NgModule({
  declarations: [SpellRoutingModule.components],
  providers:    [SpellService, SpellResolver],
  imports: [
    CommonModule,
    SpellRoutingModule,
    SharedModule
    
  ],
})
export class SpellModule {}
