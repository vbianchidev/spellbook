import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from 'src/app/shared/layouts/dashboard-layout/dashboard-layout.component';
import { SpellBookListComponent } from './views/spellbook-list/spellbook-list.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [{ path: '', component: SpellBookListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpellBookRoutingModule {
  static components = [SpellBookListComponent]
}
