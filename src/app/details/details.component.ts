import { Component, ViewEncapsulation, HostListener, OnInit  } from '@angular/core';
import { FormControl } from '@angular/forms';
import Choices from 'choices.js';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailsComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;





  //public selectedCar: number;


constructor(){
 // this.selectedCar=0;

}


selectedCar = new FormControl('');
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];






  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;


    

const choices = new Choices('[data-trigger]', {searchPlaceholderValue:"Enter a postal code"});
}

@HostListener('window:resize', ['$event'])
onWindowResize(event:any) {
  this.getScreenWidth = window.innerWidth;
  this.getScreenHeight = window.innerHeight;

  
}


@HostListener('window:orientationchange', ['$event'])
onOrientationChange(event:any ) {
  this.getScreenWidth = window.innerWidth;
  this.getScreenHeight = window.innerHeight;

if(window.orientation == 90  && window.innerWidth> window.innerHeight){
console.log("hi")
}


  
}

}
