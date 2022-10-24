import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from 'src/app/shared/shared.module';

import { SpellResolver } from './providers/spell.resolver';
import { SpellService } from './providers/spell.service';
import { SpellRoutingModule } from './spell-routing.module';
import { SpellState } from './store/spell.state';

@NgModule({
  declarations: [SpellRoutingModule.components],
  providers: [SpellService, SpellResolver],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([SpellState]),
    // My Imports
    SpellRoutingModule,
    SharedModule,
  ],
})
export class SpellModule {}
