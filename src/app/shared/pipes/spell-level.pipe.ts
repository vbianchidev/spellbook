import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iscantrip',
})
export class SpellLevelPipe implements PipeTransform {
  transform(value: number | string): string | number {
    return value == 0 ? 'TRUQUE' : value;
  }
}
