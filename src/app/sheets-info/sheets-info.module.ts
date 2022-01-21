import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheetsComponent } from './sheets/sheets.component';




@NgModule({
  declarations: [
    SheetsComponent
  ],
  exports:[
    SheetsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SheetsInfoModule { }
