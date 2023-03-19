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


    
    // const elements = document.querySelectorAll('.data-trigger-choice');
    // //const choices = new Choices(element);
    // elements.forEach((element: any) => {
    //     const choices = new Choices(element);
    // });

    const element1 = document.querySelector('.data-trigger-choice1');
        const choices1 = new Choices(element1 as any , {placeholder:true, placeholderValue:'Choose a province', shouldSort: false});
    const element2 = document.querySelector('.data-trigger-choice2');
        const choices2 = new Choices(element2 as any , {placeholder:true, placeholderValue:'Choose a city', shouldSort: false});
        const element3 = document.querySelector('.data-trigger-choice3');
        const choices3 = new Choices(element3 as any , {placeholder:true, placeholderValue:'Enter  postal code', shouldSort: false});

// const choices = new Choices('[data-trigger]', {});
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