import { Directive } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-action-bar-description-with-backbtn]',
    host: {
        class: 'fd-action-bar__description--with-backBtn'
    }
})
export class ActionBarDescriptionWithBackButtonDirective {
    constructor() {}
}
