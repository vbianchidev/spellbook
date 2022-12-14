import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpellContainerComponent } from './spell-container.component';
import { SpellDetailComponent } from './views/spell-detail/spell-detail.component';
import { SpellFormComponent } from './views/spell-form/spell-form.component';
import { SpellListComponent } from './views/spell-list/spell-list.component';

const routes: Routes = [
  {
    path: '',
    component: SpellContainerComponent,
    children: [
      { path: '', component: SpellListComponent },
      { path: 'spell/detail/:id', component: SpellDetailComponent },
      { path: 'spell/create', component: SpellFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpellRoutingModule {
  static components = [
    SpellContainerComponent,
    SpellListComponent,
    SpellDetailComponent,
  ];
}
