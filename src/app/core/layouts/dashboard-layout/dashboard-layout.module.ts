import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardLayoutComponent } from './dashboard-layout.component';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule, 
    RouterModule,
    MatCardModule,
    MatListModule, 
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    FontAwesomeModule,
  ],
  exports: [DashboardLayoutComponent],
})
export class DashboardLayoutModule {}
