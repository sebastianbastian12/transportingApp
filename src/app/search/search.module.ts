import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDropDownComponent } from './select-drop-down/select-drop-down.component';
import { SearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    SelectDropDownComponent,
    SearchBoxComponent
  ],
  exports:[
    SelectDropDownComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
