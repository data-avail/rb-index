import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'resorts-list-item',
  properties: {item: 'item'}
})
@View({
  template: '<p>{{item.name}}</p>'
})
export class ResortsListItem {
  name : string;
  constructor() {
  }
}
