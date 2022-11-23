import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from '@shared/components/components.module';
import { MaterialModule } from '@shared/material/material.module';

import { DashboardLayoutComponent } from './dashboard-layout.component';
import { HotbarComponent } from './hotbar/hotbar.component';

@NgModule({
  declarations: [DashboardLayoutComponent, HotbarComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule,
  ],
  exports: [DashboardLayoutComponent, HotbarComponent],
})
export class DashboardLayoutModule {}
