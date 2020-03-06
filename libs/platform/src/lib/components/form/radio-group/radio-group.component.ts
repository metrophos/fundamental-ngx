import {
    EventEmitter,
    Component,
    ContentChildren,
    QueryList,
    Input,
    ChangeDetectorRef,
    ChangeDetectionStrategy,
    AfterViewInit,
    Output,
    Self,
    Optional,
    ViewChildren,
} from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { stateType } from '@fundamental-ngx/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PlatformRadioButtonComponent } from './radio/radio.component';
import { SelectItem } from '../data-model';
import { CollectionBaseInput } from '../collection-base.input';

// Increasing integer for generating unique ids for radio components.
let nextUniqueId = 0;

@Component({
    selector: 'fdp-radio-group',
    templateUrl: './radio-group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent extends CollectionBaseInput implements AfterViewInit {
    /** uniqly generated, if value not provided for id */
    @Input()
    id: string = `radio-group-${nextUniqueId++}`;

    /**
     * values of radio buttons. type will be of SelectItem or String
     */
    @Input()
    list: Array<SelectItem | string>;

    /**
     * Type of Radio buttons.
     */
    @Input()
    state: stateType = 'default';

    /** selects radio button with this value */
    @Input()
    get value(): any {
        return this._value;
    }
    set value(newValue: any) {
        super.setValue(newValue);
        this._value = newValue;
        this.writeValue(newValue);
    }

    /**
     * To Dispaly Radio buttons in a line
     */
    @Input()
    isInline: boolean = false;

    /**
     * When the radio is required show None value to let user know to select something
     */
    @Input()
    hasNoValue: boolean = false;

    @Input()
    noValueLabel: string = 'None';

    /** Child radio buttons <fdp-radio-buttons> passed as contents*/
    @ContentChildren(PlatformRadioButtonComponent)
    contentRadioButtons: QueryList<PlatformRadioButtonComponent>;

    @ViewChildren(PlatformRadioButtonComponent)
    viewRadioButtons: QueryList<PlatformRadioButtonComponent>;

    /** Value change event for outer element */
    @Output()
    change: EventEmitter<PlatformRadioButtonComponent> = new EventEmitter<PlatformRadioButtonComponent>();

    /** The currently selected radio button. Should match value. */
    private _selected: PlatformRadioButtonComponent | null = null;

    private destroy$ = new Subject<boolean>();

    constructor(
        protected _changeDetector: ChangeDetectorRef,
        @Optional() @Self() public ngControl: NgControl,
        @Optional() @Self() public ngForm: NgForm
    ) {
        super(_changeDetector, ngControl, ngForm);
    }

    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    ngAfterContentChecked(): void {
        if (!this.validateRadioButtons()) {
            throw new Error('fdp-radio-button-group must contain a fdp-radio-button');
        }

        if (this.contentRadioButtons && this.contentRadioButtons.length > 0) {
            this.selectGivenValue(this.contentRadioButtons);
        }
    }

    ngAfterViewInit() {
        // Mark this component as initialized in AfterViewInit
        // because all views with contents will be initialised After this
        setTimeout(() => {
            this._initContentRadioButtons();
            this._initViewRadioButtons();
        });
    }

    /**
     * Make sure we have expected childs.
     */
    private validateRadioButtons(): boolean {
        return (
            this.contentRadioButtons.filter(
                (item) => !(item instanceof PlatformRadioButtonComponent || item['renderer'])
            ).length === 0
        );
    }

    /** selects the radio button with initial supplied value */
    private selectGivenValue(buttons: QueryList<PlatformRadioButtonComponent>) {
        buttons.forEach((button) => {
            if (button.value === this._value) {
                button.checkRadioButton();
                this._selected = button;
            }
        });
    }

    /**
     * Initializing all content radio buttons with given properties and
     * subscribing to radio button radiobuttonclicked event
     */
    private _initViewRadioButtons() {
        if (this.viewRadioButtons) {
            this.viewRadioButtons.forEach((button) => {
                if (button.value === this._value) {
                    button.checkRadioButton();
                    this._selected = button;
                    this.onChange(this._value);
                }
            });
            this._changeDetector.detectChanges();
        }
    }

    /**
     * Initializing all content radio buttons with given properties and
     * subscribing to radio button radiobuttonclicked event
     */
    private _initContentRadioButtons() {
        if (this.contentRadioButtons) {
            this.contentRadioButtons.forEach((button) => {
                this._setButtonProperties(button);
                if (button.value === this._value) {
                    button.checkRadioButton();
                    this._selected = button;
                    this.onChange(this._value);
                }
                button.click.pipe(takeUntil(this.destroy$)).subscribe((ev) => this._selectedRadioButtonChanged(ev));
            });
            this._changeDetector.detectChanges();
        }
    }

    private _setButtonProperties(button: PlatformRadioButtonComponent) {
        button.name = this.name;
        button.disabled = this._disabled;
        button.size = this.size;
        button.state = this.state;
    }

    /** Called everytime a radio button is clicked, In content child as well as viewchild */
    private _selectedRadioButtonChanged(radiobutton: PlatformRadioButtonComponent) {
        if (this._selected !== radiobutton) {
            if (this._selected) {
                this._selected.uncheckRadioButton();
            }
            this._selected = radiobutton;
        }
        this._value = radiobutton.value;
        this.change.emit(radiobutton);
        this.onChange(this._value);
        this._changeDetector.markForCheck();
    }

    radioButtonSelected(event: PlatformRadioButtonComponent) {
        this._selectedRadioButtonChanged(event);
    }

    /**
     * controlvalue accessor
     */
    writeValue(value: any): void {
        if (value) {
            this._value = value;
            this.onChange(value);
        }
    }

    /**
     * @hidden
     */
    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
