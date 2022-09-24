import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/core/constants/icons.const';

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellCardComponent {
  iconElement = Icons.elements;
}
