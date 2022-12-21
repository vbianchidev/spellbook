import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_HTTP_INTERCEPTORS } from '@core/auth/http.interceptor';
import { DEFAULT_ERROR_HANDLER } from '@core/base/error-handler';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutState } from './core/store/layout.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([LayoutState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    CoreModule,
  ],
  providers: [DEFAULT_HTTP_INTERCEPTORS, DEFAULT_ERROR_HANDLER],
  bootstrap: [AppComponent],
})
export class AppModule {}
