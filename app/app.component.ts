import { Component } from '@angular/core';

@Component({
  selector: 'my-app',//selector
  template: `<h2>Inbuilt and Custom pipes</h2>
                    <table class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Name (Built-In pipe for Uppercase)</th>
                          <th>Known for being (Built-In pipe for Lowercase)</th>
                          <th>Says what?(Custom Pipe for first letter capitalization)</th>
                        </tr>
                      </thead>
                      <tbody *ngFor="let cartoon of cartoons"><!-- Iterate through the cartoons array-->
                      <tr>
                        <td>{{cartoon.name|uppercase}}</td>
                        <td>{{cartoon.speciality|lowercase}}</td>
                        <td>{{cartoon.Says|capitalize}}</td>
                      </tr>
                      </tbody>
                    </table>

  
  `,
})


export class AppComponent  { 
  cartoons=[{//Declare an array of personalities with their special characters
    "name":"Scooby Doo",
    "speciality":"Ghost Hunter",
    "Says":"where are you?"
  },
    {
    "name":"Uncle Scrooge",
    "speciality":"Millionaire",
    "Says":"money money money"
  },
  {
    "name":"Popeye",
    "speciality":"Spinach lover",
    "Says":"the sailor man"
  },
  {
    "name":"Minnie Mouse",
    "speciality":"Pretty",
    "Says":"mickey oh mickey"
  },
  {
    "name":"Dexter",
    "speciality":"Laboratory Owner",
    "Says":"didiiii"
  }]
 }
