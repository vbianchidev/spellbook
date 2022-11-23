import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotbar',
  templateUrl: './hotbar.component.html',
  styleUrls: ['./hotbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotbarComponent {}
