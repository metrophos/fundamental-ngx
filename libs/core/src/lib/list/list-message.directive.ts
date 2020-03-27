import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { MessageStates } from '../form/form-message/form-message.component';
import { applyCssClass, CssClassBuilder } from '../utils/public_api';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-list-message]',
})
export class ListMessageDirective implements OnChanges, CssClassBuilder {

    /** Type of the message. Can be 'success' | 'error' | 'warning' | 'information' */
    @Input()
    type: MessageStates;

    /** Apply user custom styles */
    @Input()
    class: string;

    constructor(
        private _elementRef: ElementRef
    ) { }

    /** Function runs when component is initialized
     * function should build component css class
     */
    ngOnChanges(): void {
        this.buildComponentCssClass();
    }

    @applyCssClass
    /** CssClassBuilder interface implementation
     * function must return single string
     * function is responsible for order which css classes are applied
     */
    buildComponentCssClass(): string {
        return [
            'fd-list__message',
            this.type ? ('fd-list__message--' + this.type) : '',
            this.class
        ].filter(x => x !== '').join(' ');
    }

    /** @hidden */
    elementRef(): ElementRef<any> {
        return this._elementRef;
    }
}
