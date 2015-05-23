/// <reference path="../../typings/tsd.d.ts" />
export class ResortsEP {
	getResorts() : Promise<any> {
		return Promise.resolve([{name : "one"}, {name : "two"}]);
	}
}