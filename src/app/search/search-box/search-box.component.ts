import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  // The properties
  searchCriteria: string = ''; // Comes from the search input field

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * The search method called when the user clicks on the Search button.
   */
  search() {
    console.log(`User is searching for: ${this.searchCriteria}`);
  }

}
