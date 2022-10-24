import { Pipe, PipeTransform } from '@angular/core';
import { AlphabeticGroup } from '@core/rules';
import { SpellEntity } from 'src/app/modules/spell/store/spell.entity';

@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {
  transform(
    list: SpellEntity[] | null,
    type?: 'level' | 'alphabetic' | 'element'
  ): AlphabeticGroup<SpellEntity> {
    if (!list) return {};
    let data = list.reduce(
      (result: AlphabeticGroup<SpellEntity>, element: SpellEntity) => {
        let group = element.level.toString();

        if (type && type === 'alphabetic') group = element.name[0];

        if (type && type === 'element') group = element.type;

        if (!result[group]) result[group] = [element];
        else result[group].push(element);

        return result;
      },
      {}
    );
    return data;
  }
}
