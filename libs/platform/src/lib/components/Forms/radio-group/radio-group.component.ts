import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Optional,
    Output,
    Self
} from '@angular/core';
import { FormFieldControl } from '../form-control';
import { NgControl, NgForm } from '@angular/forms';
import { BaseInput } from '../base.input';
import { SelectItem } from '../data-model';

export type stateType = 'valid' | 'invalid' | 'warning' | 'default' | 'information';

@Component({
    selector: 'fdp-radio-group',
    templateUrl: 'radio-group.component.html',
    styleUrls: ['./radio-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: FormFieldControl, useExisting: RadioGroupComponent, multi: true }]
})
export class RadioGroupComponent extends BaseInput {
    @Input()
    state: stateType = 'default';

    @Input()
    get isInline(): boolean {
        return this._isInline;
    }

    set isInline(value: boolean) {
        this._isInline = this.boolProperty(value);
    }

    @Input()
    list: Array<SelectItem | string>;

    /**
     * When the radio is required show None value to let user know to select something
     */
    @Input()
    hasNoValue: boolean = false;

    @Input()
    noValueLabel: string = 'None';

    @Input()
    get value(): any {
        return super.getValue();
    }

    set value(value: any) {
        super.setValue(value);
    }

    protected _isInline: boolean = false;

    constructor(
        protected _cd: ChangeDetectorRef,
        @Optional() @Self() public ngControl: NgControl,
        @Optional() @Self() public ngForm: NgForm
    ) {
        super(_cd, ngControl, ngForm);
    }

    onRadioClick(event: MouseEvent) {
        event.stopPropagation();
    }

    writeValue(value: any): void {
        super.writeValue(value);
        this._cd.markForCheck();
    }
}
