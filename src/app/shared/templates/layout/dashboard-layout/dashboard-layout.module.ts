import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { BaseModule } from '../../base/base.module';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [CommonModule, RouterModule, BaseModule],
  exports: [DashboardLayoutComponent],
})
export class DashboardLayoutModule {}
