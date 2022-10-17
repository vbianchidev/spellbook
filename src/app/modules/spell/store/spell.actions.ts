import { SpellEntity } from './spell.entity';

export namespace SpellActions {
  export interface StateModel {
    spells: SpellEntity[];
    selectedSpell?: SpellEntity;
  }

  export class GetAll {
    static readonly type = '[SPELL] Select all Spells';
  }

  export class Select {
    constructor(public _id: number) {}
    static readonly type = '[SPELL] Select a Spell';
  }
}
