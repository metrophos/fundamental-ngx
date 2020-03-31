import { MenuComponent } from './../menu/menu.component';
import { Component, ChangeDetectionStrategy, OnInit, Input, Output, EventEmitter } from '@angular/core';

export type MenuButtonType = 'standard' | 'positive' | 'medium' | 'negative' | 'toolbar' | 'main';
export type ButtonOptions = 'light' | 'emphasized' | 'menu';

@Component({
    selector: 'fdp-menu-button',
    templateUrl: './menu-button.component.html',
    styleUrls: ['./menu-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent implements OnInit {
    @Input()
    menu: MenuComponent;

    /** Option to make to menu-button compact. */
    @Input()
    compact: boolean;

    /** Option to truncate content of the menu-button based on width. */
    @Input()
    width: string;

    /** The icon to include in the menu-button */
    @Input()
    icon: string;

    /** Menu-Button is disabled on true. */
    @Input()
    disabled: boolean;

    /** The type of the button. Types include 'standard', 'positive', 'medium', and 'negative'.
     * Leave empty for default (Action button).'*/
    @Input()
    type: MenuButtonType;

    /** Button options.  Options include 'emphasized' and 'light'. Leave empty for default.' */
    @Input()
    options: ButtonOptions;

    /** Event sent when menu-button is clicked */
    @Output()
    buttonClick = new EventEmitter();

    private menuOptions: string[] = new Array();

    /**
     *  Handles menu-button click
     */
    public onMenuButtonClick($event: any) {
        this.buttonClick.emit();
    }

    /** @hidden */
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    constructor() {}

    ngOnInit() {
        this.menuOptions.push('menu');
        if (this.options) {
            this.menuOptions.push(this.options);
        }
    }
}
