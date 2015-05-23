import {Component, View} from 'angular2/angular2'
import {ResortsList} from './resorts-list'
import {ResortsFilter} from './resorts-filter'
import {RouterLink} from 'angular2/router'


@Component({
  selector: 'resorts-page'
})
@View({
  template: `<h2>Resorts</h2>
    <a href="/resorts">Resorts</a>
    <resorts-filter (changed)="onFilterChanged($event)"></resorts-filter>
    <resorts-list></resorts-list>
  `,
  directives: [ResortsList, ResortsFilter, RouterLink]
})
export class ResortsPage {
  constructor() {
  }
  
  onFilterChanged(filter: string) {
    console.log("xxxx", filter);
  }
}
