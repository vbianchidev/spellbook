import {
  AfterViewInit,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AlphabeticGroup, DictArray } from '@core/rules';
import { Select } from '@ngxs/store';
import { LevelOrdenationPipe } from '@shared/pipes/level-ordenation.pipe';
import { Observable, tap } from 'rxjs';

import { SpellEntity } from '../../store/spell.entity';
import { SpellState } from '../../store/spell.state';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SpellListComponent {
  @Select(SpellState.spellList)
  spellList$!: Observable<SpellEntity[]>;

  spellsCount: number = 0;

  visibleSpells: DictArray<SpellEntity>[] = [];

  iterableDictionary(
    dict: AlphabeticGroup<SpellEntity>
  ): DictArray<SpellEntity>[] {
    let result: DictArray<SpellEntity>[] = [];
    Object.entries(dict).forEach(([key, value]) => {
      result.push({ key: key, data: value });
    });
    this.visibleSpells = result;
    return result;
  }
}
