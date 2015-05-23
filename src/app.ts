/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {ResortsPage} from './resorts/resorts-page'

@Component({
  selector: 'rb-index-app'
})
@View({
  directives: [ResortsPage],
  template: '<resorts-page></resorts-page>'
})
// Component controller
class RbIndexApp {
  name: string;
  
  constructor() {
  }
}




bootstrap(RbIndexApp);