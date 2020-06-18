import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {

  serverId : number = 2;
  serverStatus : string = 'online';

  getServersStatus(){
      let returnString = 'from string ' + this.serverStatus;
      return returnString;
  }

}
