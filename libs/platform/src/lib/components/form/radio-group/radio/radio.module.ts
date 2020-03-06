import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule as FdFormModule, RadioModule } from '@fundamental-ngx/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformRadioButtonComponent } from './radio.component';

@NgModule({
    imports: [CommonModule, FdFormModule, RadioModule, FormsModule, ReactiveFormsModule],
    exports: [PlatformRadioButtonComponent],
    declarations: [PlatformRadioButtonComponent]
})
export class PlatformRadioButtonModule {}
