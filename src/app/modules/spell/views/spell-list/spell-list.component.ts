import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Spell } from '../../store/spell.actions';
import { SpellEntity } from '../../store/spell.entity';
import { SpellState } from '../../store/spell.state';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {
  @Select(SpellState.spellList) 
  spellList$!: Observable<SpellEntity[]>;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    console.log('pau')
    this._store.dispatch(Spell.GetAll);
  }
}
