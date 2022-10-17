import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SpellActions } from './store/spell.actions';
import { SpellEntity } from './store/spell.entity';
import { SpellState } from './store/spell.state';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class SpellContainerComponent {
  @Select(SpellState.spellList) 
  spellList$!: Observable<SpellEntity[]>;

  constructor(private _store: Store) {
    this.getAllEvent();
  }

  public getAllEvent(): void {
    this._store.dispatch(SpellActions.GetAll);
  }
}
