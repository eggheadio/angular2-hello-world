import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

import {ContactSelect} from "./components/contact-select";


@Component({
    selector:`app`,
    directives: [ContactSelect],
    template: `<div>
        <contact-select></contact-select>
    </div>`
})
class App{
    message = `Hello world!`;
}

bootstrap(App);

