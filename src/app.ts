/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {ResortsPage} from './resorts/components/list/resorts-page'
import {ResortPage} from './resorts/components/item/resort-page'

import { RouterOutlet, RouteConfig, routerInjectables, Router } from 'angular2/router';

@Component({
  selector: 'rb-index-app'
})
@View({
  directives: [RouterOutlet, ResortsPage, ResortPage],
  template: '<router-outlet></router-outlet>'
})
@RouteConfig([
  { path: '/', component: ResortsPage },
  { path: "/resorts", component: ResortsPage, as : "resorts" },
  { path: "/resorts/:id", component: ResortPage, as : "resort" }
])
class RbIndexApp {
  constructor() {
  }
}




bootstrap(RbIndexApp, routerInjectables);