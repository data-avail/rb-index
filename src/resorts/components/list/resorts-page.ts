import {Component, View} from 'angular2/angular2'
import {ResortsList} from './resorts-list'
import {ResortsFilter} from './resorts-filter'
import {ResortsEP} from '../../services/resorts-ep'
import {IResortVM} from '../../vm';
import {ResortCreateForm} from '../create/resort-create-form';

@Component({
  appInjector: [ResortsEP],
  selector: 'resorts-page'
})
@View({
  template: `
    <h2>Resorts</h2>
    <resort-create-form (created)="appendItem($event)"></resort-create-form>
    <resorts-filter (changed)="loadItems($event)"></resorts-filter>
    <resorts-list [items]="items"></resorts-list>
  `,
  directives: [ResortsList, ResortsFilter, ResortCreateForm]
})
export class ResortsPage {
  
  items: IResortVM[];
  
  constructor(private resortsEP: ResortsEP) {
    this.loadItems();
  }
  
  appendItem(item: IResortVM) {
    this.items.splice(0, 0, item);
  }
  
  loadItems(filter?: string) {
    this.resortsEP.getResorts(filter).then(res => {
      this.items = res;  
    })    
  }  
}
