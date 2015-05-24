import {Component, View} from 'angular2/angular2';
import {Mosaic} from '../../../global/components/mosaic';
import {IResortVM} from '../../vm';

@Component({
  selector: 'resorts-list-item',
  properties: {item: 'item'}
})
@View({
  template: `
    <h3>{{item.name}}</h3>
    <p>{{item.shortDescription}}</p>
    <mosaic [media]="item.media"></mosaic>
    `,
  directives: [Mosaic]    
})
export class ResortsListItem {
  item : IResortVM;
  constructor() {
  }
}
