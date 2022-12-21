import { Injectable } from '@angular/core';
import { BaseResponse, BaseResponseArray } from '@core/base/base.response';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { SpellService } from '../providers/spell.service';
import { SpellActions } from './spell.actions';
import { SpellEntity } from './spell.entity';

@State<SpellActions.StateModel>({
  name: 'spell',
  defaults: {
    spells: undefined,
    selectedSpell: undefined,
  },
})
@Injectable()
export class SpellState {
  @Selector()
  static spellList({
    spells,
  }: SpellActions.StateModel): BaseResponseArray<SpellEntity> {
    return spells as BaseResponseArray<SpellEntity>;
  }

  @Selector()
  static selectedSpell({
    selectedSpell,
  }: SpellActions.StateModel): BaseResponse<SpellEntity> {
    return selectedSpell as BaseResponse<SpellEntity>;
  }

  constructor(private service: SpellService) {}

  @Action(SpellActions.GetAll)
  getAll({ setState }: StateContext<SpellActions.StateModel>): void {
    this.service
      .getAll()
      .pipe(
        tap(result => {
          console.log(result);
          setState({
            spells: result,
            selectedSpell: undefined,
          });
        })
      )
      .subscribe();
  }
}
