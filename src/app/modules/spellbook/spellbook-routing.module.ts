import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from 'src/app/shared/templates/layout/dashboard-layout/dashboard-layout.component';
import { ListSpellComponent } from './views/list-spell/list-spell.component';


const routes: Routes = [
  { 
    path: '', 
    component: DashboardLayoutComponent,
    children: [

      { path: '', component: ListSpellComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellBookRoutingModule { }
