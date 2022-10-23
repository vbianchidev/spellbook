import { Pipe, PipeTransform } from '@angular/core';
import { AlphabeticGroup } from '@core/rules';
import { SpellEntity } from 'src/app/modules/spell/store/spell.entity';

@Pipe({
  name: 'alphabeticOrdenation',
})
export class AlphabeticOrdenationPipe implements PipeTransform {
  transform(list: SpellEntity[] | null): AlphabeticGroup<SpellEntity> {
    if (!list) return {};
    let data = list.reduce(
      (r: AlphabeticGroup<SpellEntity>, e: SpellEntity) => {
        let group = e.name[0];

        if (!r[group]) r[group] = [e];
        else r[group].push(e);
        return r;
      },
      {}
    );
    return data;
  }
}
