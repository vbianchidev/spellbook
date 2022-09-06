import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LayoutToogleSidenav } from '../actions/layout.actions';
import { LayoutStateModel } from '../models/layout-state.model';



@State<LayoutStateModel>({
  name: "dashboard",
  defaults: {
    opened: true
  }
})
@Injectable()
export class LayoutState {

  @Selector() 
  static isOpened({opened}: LayoutStateModel): boolean {
    return opened;
  }

  @Action(LayoutToogleSidenav)
  public toggle({ getState, setState }: StateContext<LayoutStateModel>): void {
    const state = getState();
    setState({
      ...state,
      opened: !state.opened
    });
  }
}