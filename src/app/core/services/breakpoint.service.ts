import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large])
    .pipe(
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
