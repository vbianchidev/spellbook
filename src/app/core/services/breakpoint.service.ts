import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { BehaviorSubject, distinctUntilChanged, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  private readonly breakpoint$ = this.breakpointObserver
    .observe([
      Breakpoints.Large, 
      Breakpoints.Medium, 
      Breakpoints.Small
    ])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );
  
  public breakpointChange$: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(private breakpointObserver: BreakpointObserver) { }
}
