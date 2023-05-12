import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfigurationService} from "./services/configuration-service";
import {LoadingComponent} from './loading-component/loading.component';
import {LoadingInterceptorService} from "./services/loading-interceptor-service";

export function initializeConfiguration(appConfigService: ConfigurationService) {
  return () => {
    return appConfigService.loadConfiguration()
  };
}

@NgModule({
  declarations: [
    AppComponent,
   LoadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfiguration,
      multi: true,
      deps: [ConfigurationService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
