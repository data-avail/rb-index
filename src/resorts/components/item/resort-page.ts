import {Component, View} from 'angular2/angular2';
import {ResortItem} from './resort-item';

@Component({
  selector: 'resort-item'
})
@View({
  directives: [ResortItem],
  template: '<resort-item></resort-item>'
})
export class ResortPage {
  
  constructor() {
  }
}
