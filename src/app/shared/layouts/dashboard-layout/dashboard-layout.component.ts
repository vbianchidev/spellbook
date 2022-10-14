import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Layout } from 'src/app/core/store/layout.actions';
import { LayoutState } from 'src/app/core/store/layout.state';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  @Select(LayoutState.isOpened) 
  opened$!: Observable<boolean>;

  @Select(LayoutState.deviceMode) 
  deviceMode$!: Observable<boolean>;

  logo = faBook;

  constructor(private _store: Store) {}

  toggle(): void {
    this._store.dispatch(new Layout.ToogleSidenav());
  }
}
