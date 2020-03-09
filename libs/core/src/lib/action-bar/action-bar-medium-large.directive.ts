import { Directive } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-action-bar-medium-large]',
    host: {
        class: 'fd-action-bar--m_l'
    }
})
export class ActionBarMediumLargeDirective {
    constructor() {}
}
