import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NGIFComponent{
  username = '';
  email = '';
  filledData = false;

  submissionDone = false;

  newUserCreateWindow = false;
  

  onSubmit(){
    if (this.username !== '' && this.email !== '') {
      this.filledData = true;
      this.username = '';
      this.email = '';
     
    } else {
      this.filledData = false;
    }


  }

  onNewUser(){
    this.newUserCreateWindow = true;
  }







}
