import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { RPGMagicEffect } from 'src/app/core/rules/rpg.rule';
import { IconElement, Icons } from './icons.interface';

@Component({
  selector: 'app-icon',
  template: `
    <fa-icon 
      [style.color]="icon.color" 
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
    icon: faQuestionCircle
  };

  ngOnInit() {
    this.icon = Icons.elements[this.element];
  }
}
