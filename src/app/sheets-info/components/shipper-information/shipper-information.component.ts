import { Component} from '@angular/core';

@Component({
  selector: 'app-shipper-information',
  templateUrl: './shipper-information.component.html',
  styles: [
  ]
})
export class ShipperInformationComponent  {
  public shipper:string = 'Walmart';
  public address:string = 'BLVD Alvin ST.25th DR  Miami FL';
  public phone:number = 3205264823;
  public email1:string = 'walmart.appoiments@walmart.com';
  public email2:string = 'walmart.receiving@walmart.com';
  public person:string = 'John Doe';


}
