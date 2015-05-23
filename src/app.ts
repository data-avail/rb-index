/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {ResortsPage} from './resorts/resorts-page'

import { RouterOutlet, RouteConfig, routerInjectables, Router } from 'angular2/router';

@Component({
  selector: 'rb-index-app'
})
@View({
  directives: [ResortsPage],
  template: '<resorts-page></resorts-page>'
})
@RouteConfig([
  { path: "/", component: ResortsPage, as : "resorts" },
])
class RbIndexApp {
  constructor() {
  }
}




bootstrap(RbIndexApp);