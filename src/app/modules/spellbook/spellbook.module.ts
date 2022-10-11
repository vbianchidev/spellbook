import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BianchiUiModule } from 'projects/bianchi-ui/src/public-api';
import { SharedModule } from 'src/app/shared/shared.module';

import { SpellBookRoutingModule } from './spellbook-routing.module';

@NgModule({
  declarations: [
    SpellBookRoutingModule.components
  ],
  imports: [
    CommonModule,
    SpellBookRoutingModule,
    BianchiUiModule,
    SharedModule
  ],
})
export class SpellBookModule {}
