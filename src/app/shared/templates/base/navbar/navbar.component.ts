import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Layout } from 'src/app/core/actions/layout.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  constructor(private _store: Store) {}

  toggle(): void {
    this._store.dispatch(new Layout.ToogleSidenav());
  }
}
