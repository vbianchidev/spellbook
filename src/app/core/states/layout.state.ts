import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Layout } from '../actions/layout.actions';
import { LayoutEntity } from '../entities/layout.entity';



@State<LayoutEntity>({
  name: "layout",
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

  @Action(Layout.ToogleSidenav)
  public toggle({ getState, setState }: StateContext<LayoutEntity>): void {
    const state = getState();
    setState({
      ...state,
      opened: !state.opened
    });
  }

  @Action(Layout.SetSidenav)
  public setOpened(
    { getState, setState }: StateContext<LayoutEntity>,
    { opened }: Layout.SetSidenav
  ): void {
    setState({
      ...getState(),
      opened: opened
    })
  }
}