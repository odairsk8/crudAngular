import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*
 * Platform and Environment providers/directives/pipes
 */
import { routing } from './app.routing'
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

import { BlockUIModule } from 'ng-block-ui';

// Core providers
import {CoreModule} from "./core/core.module";
import {SmartadminLayoutModule} from "./shared/layout/layout.module";

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    

    CoreModule,
    SmartadminLayoutModule,

    BlockUIModule,


    routing
  ],
  exports: [
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    // ENV_PROVIDERS,
    APP_PROVIDERS,
    
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}


}
