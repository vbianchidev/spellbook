import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './base/navbar/navbar.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';


@NgModule({
  declarations: [
    // Layouts
    LoginLayoutComponent,
    DashboardLayoutComponent,
    // Base Componentes
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    LoginLayoutComponent,
    DashboardLayoutComponent,
  ],
})
export class TemplatesModule { }
