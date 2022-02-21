import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { EmployeesComponent } from './employees/employees.component';
import { FormsModule } from '@angular/forms';
import { PetComponent } from './pet/pet.component';
import { Lab3Component } from './lab3/lab3.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    PetComponent,
    Lab3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
