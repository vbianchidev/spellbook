import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Layout } from './layout.actions';

@State<Layout.StateModel>({
  name: 'layout',
  defaults: {
    opened: false,
    mobileMode: undefined
  },
})
@Injectable()
export class LayoutState {
  @Selector()
  static isOpened({ opened }: Layout.StateModel): boolean {
    return opened;
  }

  @Selector()
  static deviceMode({ mobileMode }: Layout.StateModel): boolean {
    return mobileMode as boolean;
  }

  @Action(Layout.ToogleSidenav)
  public toggle({ getState, setState }: StateContext<Layout.StateModel>): void {
    const state = getState();
    setState({
      ...state,
      opened: !state.opened,
    });
  }

  @Action(Layout.SetSidenav)
  public setOpened(
    { getState, setState }: StateContext<Layout.StateModel>,
    { opened }: Layout.SetSidenav
  ): void {
    setState({
      ...getState(),
      opened: opened,
      mobileMode: opened
    });
  }
}
