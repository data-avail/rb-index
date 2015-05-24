import {Component, View} from 'angular2/angular2';
import {Mosaic} from '../../../global/components/mosaic';
import {IResortVM} from '../../vm';
import {RouterLink, routerInjectables} from 'angular2/router';

@Component({
  //why so ? already injected in bootstrap
  appInjector: [routerInjectables],
  selector: 'resorts-list-item',
  properties: {item: 'item'}
})
@View({
  template: `
    <h3 router-link="resort"  [router-params]="{id: item.id}">{{item.name}}</h3>
    <p>{{item.shortDescription}}</p>
    <mosaic [media]="item.media"></mosaic>
    `,
  directives: [Mosaic, RouterLink]    
})
export class ResortsListItem {
  item : IResortVM;
  constructor() {
  }
}
