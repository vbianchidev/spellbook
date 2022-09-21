import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpellCardModule } from '@components/ui-spell-card/spell-card.module';


import { DashboardLayoutModule } from 'src/app/shared/templates/layout/dashboard-layout/dashboard-layout.module';

import { SpellBookRoutingModule } from './spellbook-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpellBookRoutingModule,
    DashboardLayoutModule,
    SpellCardModule
  ]
})
export class SpellBookModule { }
