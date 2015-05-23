import {Component, View, NgFor} from 'angular2/angular2';
import {ResortsListItem} from './resorts-list-item'

@Component({
  selector: 'resorts-list'
})
@View({
  template: `
    <h2>List</h2>
    <ul>
      <li *ng-for="#item of items">
        <resorts-list-item [item]="item"></resorts-list-item>
      </li>
    </ul>
    `,
  directives: [ResortsListItem, NgFor]
})
export class ResortsList {
  items: Array<{name : string}>; 
  
  constructor() {
    this.items = [{name: "Sidre"}, {name: "Cral"}];
  }
}
