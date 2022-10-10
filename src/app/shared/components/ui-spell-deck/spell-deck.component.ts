import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spell-deck',
  templateUrl: './spell-deck.component.html',
  styleUrls: ['./spell-deck.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellDeckComponent {
  constructor() {}
}
