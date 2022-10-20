import { NgModule } from '@angular/core';
import { ComponentsModule } from '@components/components.module';
import { PipesModule } from '@shared/pipes/pipes.module';

@NgModule({
  exports: [PipesModule, ComponentsModule],
})
export class SharedModule {}
