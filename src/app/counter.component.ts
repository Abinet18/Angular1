import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      <button (click)="decrement()">-</button>{{counterValue}}<button (click)="increment()">+</button>
    </p>
    `,
  styles: []
})
export class CounterComponent implements OnInit {
   @Input() public counterValue:number;
   @Output() counterChange=new EventEmitter();
  
  constructor() { 
    this.counterValue=0;
    this.counterChange.emit(this.counterValue);
  }
  increment()
  {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  decrement()
  {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {
  }

}
