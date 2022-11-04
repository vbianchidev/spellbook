import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '@shared/material/material.module';
import { PipesModule } from '@shared/pipes';
import { SpellEntity } from 'src/app/modules/spell/store/spell.entity';

import { IconComponent } from '../icon';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [
    CommonModule,
    FontAwesomeModule,
    IconComponent,
    PipesModule,
    MaterialModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  spell!: SpellEntity;
}
