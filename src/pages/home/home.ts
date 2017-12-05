import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  employees:any[];
  display : boolean = false;
  dataswitch:string;
  constructor(public navCtrl: NavController) {
    this.dataswitch="ravi";
this.employees=[
  {
         "DivisionId": "1",
         "Divisions": "ABIDS"
     },
     {
         "DivisionId": "14",
         "Divisions": "ASIF NAGAR"
     },
     {
         "DivisionId": "15",
         "Divisions": "BANJARA HILLS"
     }
];
  }
getEmployees():void
{
  this.employees=[
    {
           "DivisionId": "1",
           "Divisions": "ABIDS"
       },
       {
           "DivisionId": "14",
           "Divisions": "ASIF NAGAR"
       },
       {
           "DivisionId": "15",
           "Divisions": "BANJARA HILLS"
       },
       {
           "DivisionId": "9",
           "Divisions": "BEGUMPET"
       },
       {
           "DivisionId": "10",
           "Divisions": "CHARMINAR"
       },
       {
           "DivisionId": "2",
           "Divisions": "CHIKKADAPALLY"
       },
       {
           "DivisionId": "11",
           "Divisions": "FALAKNUMA"
       },
       {
           "DivisionId": "7",
           "Divisions": "GOPALPURAM"
       },
       {
           "DivisionId": "16",
           "Divisions": "GOSHAMAHAL"
       },
       {
           "DivisionId": "6",
           "Divisions": "KACHIGUDA"
       },
       {
           "DivisionId": "8",
           "Divisions": "MAHANKALI"
       },
       {
           "DivisionId": "4",
           "Divisions": "MALAKPET"
       },
       {
           "DivisionId": "12",
           "Divisions": "MIRCHOWK"
       },
       {
           "DivisionId": "17",
           "Divisions": "PANJAGUTTA"
       },
       {
           "DivisionId": "3",
           "Divisions": "SAIFABAD"
       },
       {
           "DivisionId": "13",
           "Divisions": "SANTOSH NAGAR"
       },
       {
           "DivisionId": "5",
           "Divisions": "SULTAN BAZAR"
       }
  ];
}
trackByEmpCode(index:number,employee:any):string
{
  return employee.DivisionId;
}
showhide():void
{
  this.display=!this.display;
}

}
