import { NgModule } from '@angular/core';
import { ComponentsModule } from '@components/components.module';
import { LayoutsModule } from './layouts/layouts.module';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  exports: [
    PipesModule,
    LayoutsModule,
    ComponentsModule,
  ]
})
export class SharedModule { }
