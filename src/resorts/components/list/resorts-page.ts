import {Component, View} from 'angular2/angular2'
import {routerInjectables, RouterLink} from 'angular2/router'
import {ResortsList} from './resorts-list'
import {ResortsFilter} from './resorts-filter'
import {ResortsEP} from '../../services/resorts-ep'
import {IResortVM} from '../../vm';

@Component({
  appInjector: [routerInjectables, ResortsEP],
  selector: 'resorts-page'
})
@View({
  template: `
    <h2>Resorts</h2>
    <a href="" router-link="home">Resorts</a>
    <resorts-filter (changed)="loadItems($event)"></resorts-filter>
    <resorts-list [items]="items"></resorts-list>
  `,
  directives: [ResortsList, ResortsFilter, RouterLink]
})
export class ResortsPage {
  
  items: IResortVM[];
  
  constructor(private resortsEP: ResortsEP) {
    this.loadItems();
  }
  
  loadItems(filter?: string) {
    this.resortsEP.getResorts(filter).then(res => {
      this.items = res;  
    })    
  }  
}
