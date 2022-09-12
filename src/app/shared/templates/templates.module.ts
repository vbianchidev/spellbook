import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsModule } from '@ngxs/store';
import { LayoutState } from 'src/app/core/states/layout.state';

import { MenuComponent } from './base/menu/menu.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { SidenavComponent } from './base/sidenav/sidenav.component';
import { SpellCardComponent } from './components/spell-card/spell-card.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    // Layouts
    LoginLayoutComponent,
    DashboardLayoutComponent,
    // Base Componentes
    NavbarComponent,
    SidenavComponent,
    MenuComponent,
    SpellCardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    NgxsModule.forFeature([LayoutState])
  ],
  exports: [
    LoginLayoutComponent,
    DashboardLayoutComponent,
    SpellCardComponent
  ],
})
export class TemplatesModule { }
