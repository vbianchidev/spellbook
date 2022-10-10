import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpellCardModule } from '@components/ui-spell-card/spell-card.module';

import { DashboardLayoutModule } from 'src/app/shared/templates/layout/dashboard-layout/dashboard-layout.module';

import { SpellBookRoutingModule } from './spellbook-routing.module';
import { ListSpellComponent } from './views/list-spell/list-spell.component';

@NgModule({
  declarations: [ListSpellComponent],
  imports: [
    CommonModule,
    SpellBookRoutingModule,
    DashboardLayoutModule,
    SpellCardModule,
  ],
})
export class SpellBookModule {}
