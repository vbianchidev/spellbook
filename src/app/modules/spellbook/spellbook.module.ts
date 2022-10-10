import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SpellBookRoutingModule } from './spellbook-routing.module';

@NgModule({
  declarations: [
    SpellBookRoutingModule.components
  ],
  imports: [
    CommonModule,
    SpellBookRoutingModule,
    SharedModule
  ],
})
export class SpellBookModule {}
