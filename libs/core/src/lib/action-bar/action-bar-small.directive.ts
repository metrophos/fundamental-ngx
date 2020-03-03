import { Directive, Host } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-action-bar-small]',
    host: {
        class: 'fd-action-bar--s'
    }
})
export class ActionBarSmallDirective {
    constructor() {}
}
