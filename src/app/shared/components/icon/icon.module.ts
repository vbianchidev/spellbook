import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './icon.component';

@NgModule({
  imports: [FontAwesomeModule],
  declarations: [IconComponent],
  exports: [IconComponent],
})
export class IconModule {}
