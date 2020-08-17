import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  serverCreationStatus = 'not created';
  num: number = 0;
  enteredData:string = '';  // this holds the data which is fetched from html
  
 

  onIncrementCommand(){
    this.num++;
    console .log(this.num);
  }

  onDecrementCommand(){
    this.num--;
    console.log(this.num);
  }

  // this method is being called to collect the inputed data from html
  // parameter of this method is the data generated at event
  onUpdateName(event:any){
    //console.log(event); // to check which value is added by user
    this.enteredData = event.target.value;
  }




}
