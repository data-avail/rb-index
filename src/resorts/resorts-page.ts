import {Component, View} from 'angular2/angular2'
import {ResortsList} from './resorts-list'
import {ResortsFilter} from './resorts-filter'

@Component({
  selector: 'resorts-page'
})
@View({
  template: `<h2>Resorts</h2>
    <resorts-filter (changed)="onFilterChanged($event)"></resorts-filter>
    <resorts-list></resorts-list>
  `,
  directives: [ResortsList, ResortsFilter],
})
export class ResortsPage {
  constructor() {
  }
  
  onFilterChanged(filter: string) {
    console.log("xxxx", filter);
  }
}
