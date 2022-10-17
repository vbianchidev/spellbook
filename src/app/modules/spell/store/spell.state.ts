import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { SpellService } from '../providers/spell.service';
import { SpellActions } from './spell.actions';
import { SpellEntity } from './spell.entity';

@State<SpellActions.StateModel>({
  name: 'spell',
  defaults: {
    spells: [],
    selectedSpell: undefined
  }
})
@Injectable()
export class SpellState {

  @Selector()
  static spellList({ spells }: SpellActions.StateModel): SpellEntity[] {
    return spells;
  }

  @Selector()
  static selectedSpell({ selectedSpell }: SpellActions.StateModel): SpellEntity {
    return selectedSpell as SpellEntity;
  }

  constructor(private service: SpellService) {}

  @Action(SpellActions.GetAll)
  public getAll({ setState }: StateContext<SpellActions.StateModel>): void {
    this.service.getAll()
      .pipe(
        tap(result => {
          console.log(result)
          setState({
            spells: result,
            selectedSpell: undefined
          })
        })
      )
      .subscribe();
  }
}