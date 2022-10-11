import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BianchiUiModule } from 'projects/bianchi-ui/src/public-api';
import { SharedModule } from 'src/app/shared/shared.module';

import { SpellRoutingModule } from './spell-routing.module';

@NgModule({
  declarations: [
    SpellRoutingModule.components
  ],
  imports: [
    CommonModule,
    SpellRoutingModule,
    BianchiUiModule,
    SharedModule
  ],
})
export class SpellModule {}
