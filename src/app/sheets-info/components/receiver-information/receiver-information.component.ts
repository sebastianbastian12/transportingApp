import { Component } from '@angular/core';

@Component({
  selector: 'app-receiver-information',
  templateUrl: './receiver-information.component.html',
  styles: [
  ]
})
export class ReceiverInformationComponent {

  public receiver:string = 'Pricemark';
  public address:string = 'Washington ST 256 W Downton Queens NY';
  public phone:number = 5264489011;
  public email1:string = 'pricemark.appoiments@walmart.com';
  public email2:string = 'pricemark.receiving@walmart.com';
  public person:string = 'Patricia Smith';
}
