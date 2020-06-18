import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warrning-alert/warning-alert.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule} from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { NGIFComponent } from './ngif/ngif.component';


@NgModule({
  declarations: [             // components are declared here
    AppComponent,
    ServerComponent,
    ServersComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    Assignment2Component,
    NGIFComponent,
  ],
  imports: [                  // allows us to add other modules to this module
    BrowserModule,             // default module
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // mentioning the component whih will get loaded during bootstrapping
})
export class AppModule { }
