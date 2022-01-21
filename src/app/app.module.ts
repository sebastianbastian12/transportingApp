import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SheetsInfoModule } from './sheets-info/sheets-info.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SheetsInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
