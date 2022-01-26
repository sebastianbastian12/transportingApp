import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search-component/search.component';
import { FormsModule } from '@angular/forms'; // We import this so we can work with 2-way binding, as described here: https://www.cloudhadoop.com/angular-get-input-value-multiple-ways/



@NgModule({
  declarations: [
    SearchComponent
  ],
  exports:[
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SearchModule { }
