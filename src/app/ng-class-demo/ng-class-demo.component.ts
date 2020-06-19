import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-demo',
  templateUrl: './ng-class-demo.component.html',
  styleUrls: ['./ng-class-demo.component.css']
})
export class NgClassDemoComponent {

  selectedClass : string = '';

  onClickClass1Btn(){
    this.selectedClass = 'class1';
  }

  onClickClass2Btn(){
    this.selectedClass = 'class2';
  }

  onReset(){
    this.selectedClass = '';
  }

}
