import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormModule as FdFormModule, RadioModule } from '@fundamental-ngx/core';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@NgModule({
    declarations: [RadioGroupComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FdFormModule, RadioModule],
    entryComponents: [RadioGroupComponent],
    exports: [RadioGroupComponent]
})
export class FdpFormModule {}
