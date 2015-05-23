import {Component, View, NgFor} from 'angular2/angular2';
import {ResortsListItem} from './resorts-list-item'
import {ResortsEP} from './resorts-ep'


@Component({
    injectors: [ResortsEP],
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
  
  constructor(/*resortsEP: ResortsEP*/) {
    var resortsEP = new ResortsEP();        
    resortsEP.getResorts().then(res => {
      this.items = res;  
    })
    
  }
}
