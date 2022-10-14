import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { SpellService } from '../providers/spell.service';
import { Spell } from './spell.actions';
import { SpellEntity } from './spell.entity';

@State<Spell.StateModel>({
  name: 'spell',
  defaults: {
    spells: [],
    selectedSpell: undefined
  }
})
@Injectable()
export class SpellState {

  @Selector()
  static spellList({ spells }: Spell.StateModel): SpellEntity[] {
    return spells;
  }

  @Selector()
  static selectedSpell({ selectedSpell }: Spell.StateModel): SpellEntity {
    return selectedSpell as SpellEntity;
  }

  constructor(private service: SpellService) {}

  @Action(Spell.GetAll)
  public getAll({ setState }: StateContext<Spell.StateModel>): void {
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