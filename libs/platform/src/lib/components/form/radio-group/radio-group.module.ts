import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule as FdFormModule } from '@fundamental-ngx/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformRadioButtonModule } from './radio/radio.module';
import { RadioGroupComponent } from './radio-group.component';

@NgModule({
    imports: [CommonModule, FdFormModule, PlatformRadioButtonModule, FormsModule, ReactiveFormsModule],
    exports: [RadioGroupComponent],
    declarations: [RadioGroupComponent]
})
export class PlatformRadioGroupModule {}
