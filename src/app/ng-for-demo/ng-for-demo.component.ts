import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent{

  serverName : string = '';
  serverList = ['default'];

  onAdd(){
    this.serverList.push(this.serverName);
  }

  obtainName(i:any){
    return this.serverList[i];
  }

}
