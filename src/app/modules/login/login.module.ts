import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './login-container.component';
import { SigninComponent } from './views/signin/signin.component';
import { SignupComponent } from './views/signup/signup.component';

@NgModule({
  declarations: [LoginContainerComponent, SigninComponent, SignupComponent],
  imports: [CommonModule, LoginRoutingModule],
  exports: [
    SigninComponent,
    SignupComponent
  ],
})
export class LoginModule {}
