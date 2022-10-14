import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SpellEntity } from 'src/app/modules/spell/store/spell.entity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  spell!: SpellEntity;
}
