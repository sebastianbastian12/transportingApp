import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoadsHistoryService } from '../services/loads-history.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // The properties
  searchCriteria: string = ''; // Comes from the search input field
  selectedCriteria: string = ''; // Comes from the select drop down menu


  /**
   * The search method called when the user clicks on the Search button.
   */
  // search() {
  //   alert(`User is searching for: ${this.searchCriteria}`);
  //   alert(`The search criteria is: ${this.selectedCriteria}`);
  // }

  // Start code added by Sebastian

 @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

 constructor( private loadsService:LoadsHistoryService){

 }

  search(){
      const value = this.txtSearch.nativeElement.value;
      this.loadsService.searchLoads(value);
      this.txtSearch.nativeElement.value = '';

  }

  /**
   * Fired when the user selects an option from the drop down menu.
   * Assigns the selectedCriteria property to the value selected
   * by the user.
   * Taken from this blog: https://blog.kevinchisholm.com/angular/get-value-selected-dropdown-menu-item/
   * @param event
   */
  selectChangeHandler (event: any) {
    this.selectedCriteria = event.target.value;
  }



}
