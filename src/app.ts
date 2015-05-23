/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {ResortsPage} from './resorts/resorts-page'
import {ResortItem} from './resorts/resort-item'

import { RouterOutlet, RouteConfig, routerInjectables, Router } from 'angular2/router';

@Component({
  appInjector: [routerInjectables],
  selector: 'rb-index-app'
})
@View({
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
@RouteConfig([
  { path: "/", component: ResortsPage, as : "home" },
  { path: "/resorts/item", component: ResortItem, as : "resort" },
])
class RbIndexApp {
  constructor() {
  }
}




bootstrap(RbIndexApp);