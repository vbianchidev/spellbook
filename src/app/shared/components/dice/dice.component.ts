import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { Dice } from '@core/rules';

import { LogoComponent } from '../logo/logo.component';

@Component({
  standalone: true,
  selector: 'app-dice',
  styleUrls: ['./dice.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    LogoComponent,
    FormsModule,
  ],
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Roll a D{{ dice }}</mat-label>
      <input
        matInput
        placeholder="Roll a dice!"
        [readonly]="true"
        [value]="result" />
      <mat-icon (click)="onClick()" matSuffix>casino</mat-icon>
    </mat-form-field>
  `,
})
export class DiceComponent {
  result: number = 0;
  animationState?: boolean;

  @Input()
  dice: Dice = 20;

  @Input()
  showResult: boolean = false;

  @Output()
  roll: EventEmitter<number> = new EventEmitter<number>();

  onClick() {
    const randomNumber = Math.floor(Math.random() * this.dice) + 1;
    this.result = randomNumber;
    this.roll.emit(randomNumber);
  }
}
