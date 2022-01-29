import { StylesCompileDependency } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-load-information',
  templateUrl: './load-information.component.html',
  styleUrls: ['./load-information.component.css']
})
export class LoadInformationComponent {

    public commodity:string = 'Frozen food';
    public weight:number = 45000;
    public truck:number = 254033;
    public pallets:number = 25;
    public stops:number = 3;
    public driverName:string = 'Juan Sanchez';
    public fleetName:string = 'Max Hendrix';
    public cName:string = 'Rebecca Taylor';
    public brokerName:string = 'Peter Nass';



}
