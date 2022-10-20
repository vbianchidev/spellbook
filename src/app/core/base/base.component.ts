/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({template: ''})
export abstract class BaseContainer implements OnDestroy { 
  private _unsubscribe: Subject<void> = new Subject();
  get unsubscribe$(): Subject<void> { 
    return this._unsubscribe; 
  }
  
  ngOnDestroy(): void {
    this.unsubscribeAction();
  }

  private unsubscribeAction(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
