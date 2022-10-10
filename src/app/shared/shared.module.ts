import { NgModule } from '@angular/core';
import { ComponentsModule } from '@components/components.module';
import { LayoutsModule } from './layouts/layouts.module';

import { TemplatesModule } from './templates/base.module';



@NgModule({
  exports: [
    ComponentsModule,
    LayoutsModule,
    TemplatesModule
  ]
})
export class SharedModule { }
