import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpellCardModule } from 'src/app/shared/templates/components/spell-card/spell-card.module';
import { DashboardLayoutModule } from 'src/app/shared/templates/layout/dashboard-layout/dashboard-layout.module';

import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardLayoutModule,
    SpellCardModule
  ]
})
export class DashboardModule { }
