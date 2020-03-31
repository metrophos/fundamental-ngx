import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
    ComboboxModule,
    DatePickerModule as FdDatePickerModule,
    FormModule as FdFormModule,
    InlineHelpModule,
    SelectModule,
    RadioModule
} from '@fundamental-ngx/core';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@NgModule({
    declarations: [RadioGroupComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FdFormModule,
        InlineHelpModule,
        SelectModule,
        FdDatePickerModule,
        ComboboxModule,
        RadioModule
    ],
    entryComponents: [RadioGroupComponent],
    exports: [RadioGroupComponent]
})
export class FdpFormModule {}
