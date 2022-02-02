import { Component} from '@angular/core';

@Component({
  selector: 'app-carrier-information',
  templateUrl: './carrier-information.component.html',
  styles: [
  ]
})
export class CarrierInformationComponent {

  public carrier:string = 'Eagle Transporting';
  public address:string = 'Washington ST 256 W Downton Queens NY';
  public person:string = 'Robert Klauss';
  public phone:number = 5264489011;
  public email:string = 'robert.k@eagletransporting.com';
  public scheduleWork: string = 'M - S 08:00 to 17:00 EST';



}
