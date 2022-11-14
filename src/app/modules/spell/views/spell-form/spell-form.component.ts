import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SpellEntity } from '../../store/spell.entity';
import { SpellState } from '../../store/spell.state';

@Component({
  selector: 'app-spell-form',
  templateUrl: './spell-form.component.html',
  styleUrls: ['./spell-form.component.scss'],
})
export class SpellFormComponent {
  @Select(SpellState.spellList)
  spellList$!: Observable<SpellEntity[]>;
}
