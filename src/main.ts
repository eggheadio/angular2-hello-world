import 'reflect-metadata'
import 'zone.js'

import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector:`app`,
    template: `<div>
        {{message}}
    </div>`
})
class App{
    message = `Hello world!`;
}

bootstrap(App);

