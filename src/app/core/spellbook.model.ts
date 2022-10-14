import { SpellEntity } from '../modules/spell/store/spell.entity';
import { RPGClass } from './rules/rpg.rule';

export interface SpellBook {
  name: string;
  class: RPGClass;
  level: number;
  knowSpells: SpellEntity[];
  classSpells: SpellEntity[];
}
