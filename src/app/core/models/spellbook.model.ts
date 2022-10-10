import { RPGClass } from '../rules/rpg.rule';
import { Spell } from './spell.model';

export interface SpellBook {
  name: string;
  class: RPGClass;
  level: number;
  knowSpells: Spell[];
  classSpells: Spell[];
}
