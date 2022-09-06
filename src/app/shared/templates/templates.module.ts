import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxsModule } from '@ngxs/store';
import { LayoutState } from 'src/app/core/states/layout.state';
import { MenuComponent } from './base/menu/menu.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { SidenavComponent } from './base/sidenav/sidenav.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';



@NgModule({
  declarations: [
    // Layouts
    LoginLayoutComponent,
    DashboardLayoutComponent,
    // Base Componentes
    NavbarComponent,
    SidenavComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NgxsModule.forFeature([LayoutState])
  ],
  exports: [
    LoginLayoutComponent,
    DashboardLayoutComponent,
  ],
})
export class TemplatesModule { }
