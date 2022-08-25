import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { NavbarComponent } from './base/navbar/navbar.component';



@NgModule({
  declarations: [
    // Layouts
    LoginLayoutComponent,
    DashboardLayoutComponent,
    // Base Componentes
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginLayoutComponent,
    DashboardLayoutComponent,
  ],
})
export class TemplatesModule { }
