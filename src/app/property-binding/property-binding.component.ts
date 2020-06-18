import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  allowNewServer = false;

  constructor() {

    setTimeout(
      () => {                       // check arrow function
      this.allowNewServer = true;
      }, 
      2000
      )

  }

}



