// decorator

import { Component } from "@angular/core";  // import for component decorator

// you can thing this like an identification of the component
@Component({    // this is an decorator
    selector:'app-server',                  // name by which this component can get selected
    templateUrl:'./server.component.html',   // to load the html of this component go to this link  
    styleUrls: ['./server.component.css'],
})

//the class of this component 
export class ServerComponent {


}

// things to keep in mind
// 1. name of the class
// 2. name of the component selector
// 3. name of the component folder
// 4. name of the html template of the component7
// 5. name of the component.ts file 