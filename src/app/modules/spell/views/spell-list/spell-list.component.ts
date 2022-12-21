import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseResponseArray } from '@core/base/base.response';
import { Dict, DictArray } from '@core/rules';
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
  spellList$!: Observable<BaseResponseArray<SpellEntity>>;

  spellsCount: number = 0;

  visibleSpells: DictArray<BaseResponseArray<SpellEntity>>[] = [];

  filter: 'level' | 'alphabetic' | 'element' = 'level';

  iterableDictionary(
    dict: Dict<BaseResponseArray<SpellEntity>>
  ): DictArray<BaseResponseArray<SpellEntity>>[] {
    let result: DictArray<BaseResponseArray<SpellEntity>>[] = [];

    Object.entries(dict).forEach(([key, value]) => {
      result.push({ key: key, data: value });
    });
    this.visibleSpells = result;
    return result;
  }

  hasLoaded(raw: BaseResponseArray<SpellEntity> | null): boolean {
    if (raw === null) return false;
    if (raw.data.length === 0) return false;
    return true;
  }
}
