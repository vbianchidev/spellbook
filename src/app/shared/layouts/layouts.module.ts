import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutModule } from './dashboard-layout/dashboard-layout.module';
import { LoginLayoutModule } from './login-layout/login-layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginLayoutModule
  ],
  exports: [
    DashboardLayoutModule
  ]
})
export class LayoutsModule { }
