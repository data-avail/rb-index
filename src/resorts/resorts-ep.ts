/// <reference path="../../typings/tsd.d.ts" />
import {Injectable} from 'angular2/angular2';

export class ResortsEP {
	getResorts() : Promise<any> {
		return Promise.resolve([{name : "one"}, {name : "two"}]);
	}
}