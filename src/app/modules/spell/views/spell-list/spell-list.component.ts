import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseResponse } from '@core/base/base.response';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SpellEntity } from '../../store/spell.entity';
import { SpellState } from '../../store/spell.state';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellListComponent {
  @Select(SpellState.spellList)
  spellList$!: Observable<BaseResponse<SpellEntity[]>>;
}
