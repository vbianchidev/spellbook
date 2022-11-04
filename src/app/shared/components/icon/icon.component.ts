import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { RPGMagicEffect } from 'src/app/core/rules/rpg.rule';
import { MagicTextComponent } from '../magic-text/magic-text.component';
import { IconElement, Icons } from './icons.interface';

@Component({
  standalone: true,
  imports: [FontAwesomeModule, MagicTextComponent],
  selector: 'app-icon',
  template: `
    <fa-icon
      class="magic-color"
      [style.color]="'rgb(  0, 229, 255)'"
      [icon]="icon.icon">
    </fa-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  @Input()
  element: RPGMagicEffect = 'acid';

  icon: IconElement = {
    color: '#000000',
    icon: faQuestionCircle,
  };

  ngOnInit() {
    this.icon = Icons.elements[this.element];
  }
}
