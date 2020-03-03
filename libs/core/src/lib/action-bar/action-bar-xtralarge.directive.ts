import { Directive } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-action-bar-xtralarge]',
    host: {
        class: 'fd-action-bar--xl'
    }
})
export class ActionBarXtralargeDirective {
    constructor() {}
}
