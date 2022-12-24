import { Pipe, PipeTransform } from '@angular/core';
import { Dict } from '@core/rules';
import { SpellEntity } from 'src/app/modules/spell/store/spell.entity';

@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {
  transform(
    list: SpellEntity[] | null,
    type?: 'level' | 'alphabetic' | 'element'
  ): Dict<SpellEntity> {
    if (!list) return {};

    const numero = [1, 2, 3, 4, 5];

    numero.reduce((somatoria: number, elementoAutal: number) => {
      return (somatoria += elementoAutal);
    });

    console.log(
      numero.reduce((somatoria: number, elementoAutal: number) => {
        return (somatoria += elementoAutal);
      })
    );

    let data = list.reduce(
      (result: Dict<SpellEntity>, element: SpellEntity) => {
        let group = element.level.toString();

        if (type && type === 'alphabetic') group = element.name[0];

        if (type && type === 'element') group = element.damage;

        if (!result[group]) result[group] = [element];
        else result[group].push(element);

        return result;
      },
      {}
    );
    return data;
  }
}
