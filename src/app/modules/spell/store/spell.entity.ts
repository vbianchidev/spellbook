import {
  RPGMagicComponents,
  RPGMagicEffect,
  RPGMagicSchool,
} from 'src/app/core/rules/rpg.rule';

export interface SpellEntity {
  id: number;
  name: string;
  description: string;
  damage: RPGMagicEffect;
  level: number;
  school: RPGMagicSchool;
  castingTime: string;
  range: string;
  duration: string;
  components: RPGMagicComponents[];
}
