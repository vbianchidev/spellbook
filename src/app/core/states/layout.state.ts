import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LayoutToogleSidenav } from '../actions/layout.actions';
import { LayoutEntity } from '../entities/layout.entity';



@State<LayoutEntity>({
  name: "dashboard",
  defaults: {
    opened: false
  }
})
@Injectable()
export class LayoutState {

  @Selector() 
  static isOpened({opened}: LayoutEntity): boolean {
    return opened;
  }

  @Action(LayoutToogleSidenav)
  public toggle({ getState, setState }: StateContext<LayoutEntity>): void {
    const state = getState();
    setState({
      ...state,
      opened: !state.opened
    });
  }
}