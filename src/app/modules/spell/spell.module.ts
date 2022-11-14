import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from 'src/app/shared/shared.module';

import { SpellResolver } from './providers/spell.resolver';
import { SpellService } from './providers/spell.service';
import { SpellRoutingModule } from './spell-routing.module';
import { SpellState } from './store/spell.state';
import { SpellFormComponent } from './views/spell-form/spell-form.component';

@NgModule({
  declarations: [SpellRoutingModule.components, SpellFormComponent],
  providers: [SpellService, SpellResolver],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([SpellState]),

    // My Imports
    SpellRoutingModule,
    SharedModule,
  ],
})
export class SpellModule {}
