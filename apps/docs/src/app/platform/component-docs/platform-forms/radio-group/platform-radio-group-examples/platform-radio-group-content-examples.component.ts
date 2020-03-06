import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'fdp-platform-radio-group-content-example',
    templateUrl: './platform-radio-group-content-example.component.html',
})
export class PlatformRadioGroupContentExampleComponent {
    favoriteSeason: string = '';
    favoriteSeason2: string = '';
    seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

    customForm = new FormGroup({
        example1: new FormControl({ value: '', disabled: false }),
        example2: new FormControl({ value: '', disabled: false }),
        example3: new FormControl({ value: 'Winter', disabled: false }),
    });
}
