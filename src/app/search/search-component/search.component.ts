import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // The properties
  searchCriteria: string = ''; // Comes from the search input field
  selectedCriteria: string = ''; // Comes from the select drop down menu

  constructor() {
  }

  /**
   * Called after the component has been completely initialized
   */
  ngOnInit(): void {
    console.log("Component has been initialized");
    let selectMenu = document.getElementById("search-select");
    selectMenu?.addEventListener('change', (event) => {
      console.log(this.selectedCriteria);
      if (this.selectedCriteria == 'receiver-name') {
        console.log("User selected receiver name");
      }
    });
  }

  /**
   * The search method called when the user clicks on the Search button.
   */
  search() {
    alert(`User is searching for: ${this.searchCriteria}`);
    alert(`The search criteria is: ${this.selectedCriteria}`);
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
