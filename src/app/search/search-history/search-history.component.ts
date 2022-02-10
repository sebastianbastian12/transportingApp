import { Component} from '@angular/core';
import { LoadsHistoryService } from '../services/loads-history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styles: [

  ]
})
export class SearchHistoryComponent {


  get history(){
    return this.loadsService.history;
  }
  constructor( private loadsService:LoadsHistoryService){}


}
