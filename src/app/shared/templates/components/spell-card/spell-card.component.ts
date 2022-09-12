import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SpellElementsIcons } from 'src/app/core/constants/spell-elements-icons.const';

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellCardComponent implements OnInit {
  elementsIcons = SpellElementsIcons
  constructor() { }

  ngOnInit(): void {
  }

}
