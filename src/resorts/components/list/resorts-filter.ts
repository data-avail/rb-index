import {Component, View, EventEmitter} from 'angular2/angular2'
import {InputChanged} from '../../../global/directives/input-changed'

@Component({
  selector: 'resorts-filter',
  events: ["changed"]
})
@View({  
  template: `<h3>Filter</h3>
  <input (changed)="onChanged($event)">
  `,
  directives: [InputChanged]
})
export class ResortsFilter {
    
    private changed: EventEmitter;
   
    constructor() {
      this.changed = new EventEmitter();
    }
    
    onChanged(value) {
      //ObservableWrapper.callNext(this.destroy, null);
      this.changed.next(value);
    }
    
}
