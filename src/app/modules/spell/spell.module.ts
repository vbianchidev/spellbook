import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
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
    SpellRoutingModule,
    MatListModule,
    MatRippleModule,
    NgxsModule.forFeature([SpellState]),
    // My Imports
    SharedModule,
  ],
})
export class SpellModule {}
