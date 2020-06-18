import { Component } from "@angular/core";  // import for component decorator

// you can think this like an identification of the component
@Component({    // this is an decorator

    // name by which this component can get selected
    selector:'app-servers',   
    //selector: '[app-servers]',   // now you can use this selector as css style tag in html file    
    // selector: '.app-servers',    // now you can use this selector as a css class tag in html file           
    
    // to load the html of this component go to this link 
    templateUrl:'./servers.component.html', 

    // to directly add the html stuff right here
    //template: `<app-server></app-server><app-server></app-server>`,

    // to give css file link to the component
    styleUrls: ['./servers.component.css'],

})

//the class of this component 
export class ServersComponent {
    
}