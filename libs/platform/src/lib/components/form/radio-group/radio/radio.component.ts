import {
    Component,
    ChangeDetectorRef,
    EventEmitter,
    Input,
    Output,
    Optional,
    Self,
    ViewChild,
    TemplateRef,
    ChangeDetectionStrategy,
} from '@angular/core';
import { RadioButtonComponent, stateType } from '@fundamental-ngx/core';
import { NgControl, NgForm } from '@angular/forms';
import { BaseInput } from '../../base.input';

let uniqueId = 0;

@Component({
    selector: 'fdp-radio-button',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformRadioButtonComponent extends BaseInput {
    /** Setting default value for mandatory field id */
    @Input()
    id: string = `radio-id-${uniqueId++}`;

    /** Setting default value for mandatory field name */
    @Input()
    name: string = `radio-id-${uniqueId++}`;

    /**
     * Type of Radio buttons. valid | invalid | warning | default |information
     */
    @Input()
    get state(): stateType {
        return this._state;
    }
    set state(newState: stateType) {
        this._state = newState;
        this._cd.markForCheck();
    }

    @Input()
    get value(): any {
        return this._value;
    }
    set value(newValue: any) {
        if (this._value !== newValue) {
            super.setValue(newValue);
            this._value = newValue;
        }
    }

    /** @hidden
     * used for radio button creation if list value present
     */
    @Input()
    forceRender: boolean = false;

    /** click event to emit */
    @Output()
    readonly click: EventEmitter<PlatformRadioButtonComponent> = new EventEmitter();

    /** Access radio button child elemen passed as content of radio button group*/
    @ViewChild(RadioButtonComponent, { static: false })
    coreRadioButton: RadioButtonComponent;

    /** reference of template */
    @ViewChild('renderer')
    renderer: TemplateRef<any>;

    /**
     * Value for the radio-group. Should equal the value of the selected radio button if there is
     * a corresponding radio button with a matching value.
     */
    protected _value: any = null;
    protected _state: stateType = 'default';

    constructor(
        protected _cd: ChangeDetectorRef,
        @Optional() @Self() public ngControl: NgControl,
        @Optional() @Self() public ngForm: NgForm
    ) {
        super(_cd, ngControl, ngForm);
    }

    onRadioClick(event: KeyboardEvent | MouseEvent) {
        event.stopPropagation();
        if (!this.disabled) {
            this.onChange(this._value);
            this.click.emit(this);
        }
    }

    /** method to check radio button on click */
    checkRadioButton() {
        if (this.coreRadioButton) {
            this.coreRadioButton.inputElement.nativeElement.checked = true;
        }
    }

    /** method to uncheck all other radio button */
    uncheckRadioButton() {
        if (this.coreRadioButton) {
            this.coreRadioButton.inputElement.nativeElement.checked = false;
        }
    }
}
