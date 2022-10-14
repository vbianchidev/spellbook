import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Layout } from './core/store/layout.actions';
import { BreakpointService } from './core/services/breakpoint.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private _breakPoint: BreakpointService, private _store: Store) {
    this._breakPoint.breakpoint$.subscribe((change) => {
      this._store.dispatch(new Layout.SetSidenav(!change.matches));
    });
  }
}
