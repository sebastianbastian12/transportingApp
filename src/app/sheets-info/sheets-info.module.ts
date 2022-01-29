import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadInformationComponent } from './components/load-information/load-information.component';
import { ShipperInformationComponent } from './components/shipper-information/shipper-information.component';
import { ReceiverInformationComponent } from './components/receiver-information/receiver-information.component';
import { CarrierInformationComponent } from './components/carrier-information/carrier-information.component';



@NgModule({
  declarations: [
    LoadInformationComponent,
    ShipperInformationComponent,
    ReceiverInformationComponent,
    CarrierInformationComponent
  ],
  exports:[
    LoadInformationComponent,
    ShipperInformationComponent,
    ReceiverInformationComponent,
    CarrierInformationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SheetsInfoModule { }
