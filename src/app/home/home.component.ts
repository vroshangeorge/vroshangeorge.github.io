import { Component, ViewEncapsulation, HostListener, OnInit  } from '@angular/core';
import { FormControl } from '@angular/forms';
import Choices from 'choices.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
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


    

debugger
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

debugger
if(window.orientation == 90  && window.innerWidth> window.innerHeight){
console.log("hi")
}


  
}

}