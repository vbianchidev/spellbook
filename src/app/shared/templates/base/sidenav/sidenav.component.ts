import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { interval, Observable, of } from 'rxjs';
import { LayoutState } from 'src/app/core/states/layout.state';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  
  @Select(LayoutState.isOpened) opened$!: Observable<boolean>;

}
