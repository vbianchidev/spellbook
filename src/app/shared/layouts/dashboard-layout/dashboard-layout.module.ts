import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../../templates/base.module';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [CommonModule, RouterModule, TemplatesModule],
  exports: [DashboardLayoutComponent],
})
export class DashboardLayoutModule {}
