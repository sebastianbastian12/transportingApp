import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDropDownComponent } from './select-drop-down/select-drop-down.component';



@NgModule({
  declarations: [
    SelectDropDownComponent
  ],
  exports:[
    SelectDropDownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
