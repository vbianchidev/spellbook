import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, takeUntil } from 'rxjs';
import { BaseContainer } from 'src/app/core/base/base.component';
import { SpellActions } from './store/spell.actions';
import { SpellEntity } from './store/spell.entity';
import { SpellState } from './store/spell.state';

@Component({
  template: '<router-outlet></router-outlet>',
})
export class SpellContainerComponent extends BaseContainer implements OnInit {
  @Select(SpellState.spellList)
  spellList$!: Observable<SpellEntity[]>;

  constructor(private _store: Store) {
    super();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this._store
      .dispatch(SpellActions.GetAll)
      .pipe(takeUntil(this.unsubscribe$));
  }

  create({}: SpellEntity): void {}

  update({}: SpellEntity): void {}

  delete(id: string): void {}
}
