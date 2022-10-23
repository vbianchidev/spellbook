import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface RPGIcon {
  icon: IconDefinition;
  color: string;
}

export interface AlphabeticGroup<T> {
  [key: string]: T[];
}

export interface DictArray<T> {
  key: string;
  data: T[];
}
