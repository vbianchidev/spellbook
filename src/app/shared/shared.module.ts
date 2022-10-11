import { NgModule } from '@angular/core';
import { ComponentsModule } from '@components/components.module';

import { LayoutsModule } from './layouts/layouts.module';



@NgModule({
  exports: [
    ComponentsModule,
    LayoutsModule,
  ]
})
export class SharedModule { }
