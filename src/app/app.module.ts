import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlockCopyModule } from 'patternfly-ng';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlockCopyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
