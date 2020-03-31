import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export type stateType = 'valid' | 'invalid' | 'warning' | 'default' | 'information';

@Component({
    selector: 'fdp-platform-radio-group-list-example',
    templateUrl: './platform-radio-group-list-example.component.html'
})
export class PlatformRadioGroupListExampleComponent {
    options = ['Option 1', 'Option 2', 'Option 3'];
    name = 'option';
    compact = '';
    disabled = 'false';
    state = 'default';
    hasNoValue = 'true';
    noValueLabel = '(No selection)';

    customForm = new FormGroup({
        example1: new FormControl(''),
        example2: new FormControl('')
    });
}
