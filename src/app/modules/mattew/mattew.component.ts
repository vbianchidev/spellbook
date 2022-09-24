import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mattew',
  templateUrl: './mattew.component.html',
  styleUrls: ['./mattew.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MattewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
