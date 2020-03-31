import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputSize } from './../form/form-control';
import { ButtonType } from '../button/button.component';
import { ButtonOptions } from '../button/button.component';

@Component({
    selector: 'fdp-menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {
    /** Id for menu-button. */
    @Input()
    Id: string;

    /** Menu button size. ex: compact | cozy  */
    @Input()
    displaySize: InputSize = 'cozy';

    /** to truncate text of menu-button based on width. */
    @Input()
    width: string;

    /** The Sap-icon to include in the menu-button */
    @Input()
    icon: string;

    /** Menu-Button is disabled on true. */
    @Input()
    disabled: boolean = false;

    /** The type of the button. Types include 'standard', 'positive', 'medium', and 'negative'.
     * Leave empty for default (Action button).'*/
    @Input()
    type: ButtonType;

    /** Button options.  Options include 'emphasized' and 'light'. Leave empty for default.' */
    @Input()
    options: ButtonOptions;

    /** Event sent when menu-button is clicked */
    @Output()
    click: EventEmitter<MouseEvent | KeyboardEvent | TouchEvent> = new EventEmitter();

    /** add 'menu' as button option */
    /** @hidden */
    menuOptions: string[] = new Array();

    /** @hidden */
    constructor() {}

    /** @hidden */
    ngOnInit() {
        this.menuOptions.push('menu'); // for dropdown icon
        if (this.options) {
            this.menuOptions.push(this.options);
        }
    }

    /**
     *  Handles menu-button click
     */
    public buttonclick($event: any) {
        event.stopPropagation();
        this.click.emit();
    }

    /** @hidden */
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
