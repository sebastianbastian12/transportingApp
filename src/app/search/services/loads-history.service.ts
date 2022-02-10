import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadsHistoryService {

   private _history:string[] = [];


   get history(){
     return [...this._history];
   }

   searchLoads(query:string){
     this._history.unshift(query);
     console.log(this._history);
   }

}
