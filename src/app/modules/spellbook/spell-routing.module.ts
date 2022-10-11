import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from 'src/app/shared/layouts/dashboard-layout/dashboard-layout.component';
import { SpellContainerComponent } from './spell-container.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [{ 
      path: '', component: SpellContainerComponent
    }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpellRoutingModule {
  static components = [ 
    SpellContainerComponent
  ]
}
