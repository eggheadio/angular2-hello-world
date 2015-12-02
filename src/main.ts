import 'reflect-metadata'
import 'zone.js'

import {Component, bootstrap} from "angular2/angular2";

@Component({
    selector:`app`,
    template: `<div>{{message}}</div>`
})
class App{
    message = `Hello world!`;
}

bootstrap(App);

