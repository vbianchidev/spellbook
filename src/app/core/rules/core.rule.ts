import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface RPGIcon {
  icon: IconDefinition;
  color: string;
}

export interface Dict<T> {
  [key: string]: T[];
}

export interface DictArray<T> {
  key: string;
  data: T[];
}

export type Dice = 4 | 6 | 8 | 10 | 12 | 20;
