import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<h1>Welcome to my counter app</h1>
             <p>Input counter value(from parent) : <input type=text #counterTxt [value]="ComponentCounterValue" (input)="ComponentCounterValue=counterTxt.value"> </p>
             <app-counter [counterValue]="ComponentCounterValue" (counterChange)="ComponentCounterValue=$event"></app-counter>
             <p>Component Counter value in parent: {{ComponentCounterValue}}</p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentCounterValue=0;
  title = 'Parent';
}
