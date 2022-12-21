import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/auth/auth.guard';
import { DashboardLayoutComponent } from '@layouts/dashboard-layout';
import { LoginLayoutComponent } from '@layouts/login-layout';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    canLoad: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/spell/spell.module').then(m => m.SpellModule),
      },
    ],
  },
  {
    path: 'auth',
    component: LoginLayoutComponent,
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
