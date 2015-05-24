/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {ResortsPage} from './resorts/components/list/resorts-page'

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
  { path: "/", component: ResortsPage, as : "home" }
])
class RbIndexApp {
  constructor() {
  }
}




bootstrap(RbIndexApp);