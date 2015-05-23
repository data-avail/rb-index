import {Directive, EventEmitter} from 'angular2/angular2'

@Directive({
  selector: "input",
  events: ["changed"],
  hostListeners : {'keyup': 'onKeyup($event.target.value)'}
})
export class InputChanged {
  private changed: any;//EventEmiter
  private recentVal: string;
  
  constructor() {
    this.changed = new EventEmitter();
  }
  
  onKeyup(val) {
    if (this.recentVal != val) {
      this.recentVal = val;
      this.changed.next(val);
    }
  }
   
}
