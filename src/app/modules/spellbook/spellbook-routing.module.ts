import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from 'src/app/shared/templates/layout/dashboard-layout/dashboard-layout.component';


const routes: Routes = [
  { 
    path: '', 
    component: DashboardLayoutComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellBookRoutingModule { }
