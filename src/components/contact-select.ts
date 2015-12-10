import {Component} from 'angular2/core'
import {ReplaySubject, Subject} from 'rxjs/Rx'

@Component({
  selector: 'contact-select',
  template: `
    <div>
      <h2>Hello Angular2!</h2>
      <button (click)="increment()">+</button>
      {{total | async}}
      <button  (click)="decrement()">-</button>
    </div>
  `,
})
export class ContactSelect {
  dispatcher = new Subject();
  total;
  constructor() {
    
    this.total = this.dispatcher.scan((total:number, value) => total + value).startWith(0);
    
  }
  increment(){
    this.dispatcher.next(1)
  }
  decrement(){
    this.dispatcher.next(-1)
  }
}