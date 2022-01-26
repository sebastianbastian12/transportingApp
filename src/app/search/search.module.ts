import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDropDownComponent } from './select-drop-down/select-drop-down.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms'; // We import this so we can work with 2-way binding, as described here: https://www.cloudhadoop.com/angular-get-input-value-multiple-ways/



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
    CommonModule,
    FormsModule
  ]
})
export class SearchModule { }
