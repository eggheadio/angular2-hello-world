//These first 3 lines will be deprecated by the final release
import 'reflect-metadata'
import 'zone.js'
import "angular2/angular2";

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

