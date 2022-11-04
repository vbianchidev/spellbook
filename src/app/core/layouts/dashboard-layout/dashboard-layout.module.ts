import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentsModule } from '@shared/components/components.module';
import { MaterialModule } from '@shared/material/material.module';

import { DashboardLayoutComponent } from './dashboard-layout.component';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule,
  ],
  exports: [DashboardLayoutComponent],
})
export class DashboardLayoutModule {}
