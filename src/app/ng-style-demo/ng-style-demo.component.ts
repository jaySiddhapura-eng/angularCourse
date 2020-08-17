import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-demo',
  templateUrl: './ng-style-demo.component.html',
  styleUrls: ['./ng-style-demo.component.css']
})
export class NgStyleDemoComponent  {

  screenVar: string = 'chartreus';      // default colors
  textColorVar: string = 'blue';

  screenVarUser: string = 'green';       // defult value from color obtained by user
  textColorVarUser: string = 'yellow';


  onBgPress(){                            // this method get executed when BG:YELLOW button pressed
    this.screenVar = 'rgb(255,255,25)';   // set the background color var a rgb(255,255,25)
  }

  onTextColorPress(){                     // this method get execcuted when TEXT:BLACK button pressed
    this.textColorVar = 'black';          // set the textColorVar a black
  }

  getColor(){                             // gives value of BG color to the ngStyle directive of un ordered list
    return this.screenVar;                // simply return then value of background color variable
  }

  getFontColor(){                         // gives value of Text color to the ngStyle directive on un ordered list
    return this.textColorVar;             // simply returns the value of text color variable
  }

  onReset(){                              // this method will be executed when reset button is clicked
    this.screenVar  = 'rgb(127,255,0)';   // turn the background color to default
    this.textColorVar = 'blue'            // turn the font color to blue
  }

  onEnter(){                              // when enter button clicked this method will be executed
    this.screenVar = this.screenVarUser;          // set the background color var to the entered BG value
    this.textColorVar = this.textColorVarUser;    // set the text color var to the entered text color value
  }

}
