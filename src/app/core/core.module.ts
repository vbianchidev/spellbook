import { LayoutModule } from '@angular/cdk/layout';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './guards/ensure-module-loaded-once.guard';
import { BreakpointService } from './services/breakpoint.service';

@NgModule({
  exports: [LayoutModule],
  providers: [BreakpointService],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    super(parentModule);
  }
}
