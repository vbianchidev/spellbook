import { NgModule } from '@angular/core';
import { ComponentsModule } from '@components/components.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  exports: [PipesModule, ComponentsModule, MaterialModule],
})
export class SharedModule {}
