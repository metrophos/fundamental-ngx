import { Component } from '@angular/core';

export type stateType = 'valid' | 'invalid' | 'warning' | 'default' | 'information';

@Component({
    selector: 'fdp-platform-radio-group-list-items-example',
    templateUrl: './platform-radio-group-list-items-example.component.html'
})
export class PlatformRadioGroupListItemsExampleComponent {
    items = [
        {
            label: 'Option 1',
            value: 'Option 1',
            compact: '',
            state: 'default',
            disabled: false,
            triggerValue: ''
        },
        {
            label: 'Option 2',
            value: 'Option 2',
            compact: '',
            state: 'valid',
            disabled: false,
            triggerValue: ''
        },
        {
            label: 'Option 3',
            value: 'Option 3',
            compact: '',
            state: 'invalid',
            disabled: false,
            triggerValue: ''
        },
        {
            label: 'Option 4',
            value: 'Option 4',
            compact: '',
            state: 'warning',
            disabled: false,
            triggerValue: ''
        },
        {
            label: 'Option 5',
            value: 'Option 5',
            compact: '',
            state: 'information',
            disabled: false,
            triggerValue: ''
        }
    ];

    itemsDisabled = [
        {
            label: 'Option 1 Disabled',
            value: 'Option 1 Disabled',
            compact: '',
            state: 'default',
            disabled: true,
            triggerValue: ''
        },
        {
            label: 'Option 2 Disabled',
            value: 'Option 2 Disabled',
            compact: '',
            state: 'valid',
            disabled: true,
            triggerValue: ''
        },
        {
            label: 'Option 3 Disabled',
            value: 'Option 3 Disabled',
            compact: '',
            state: 'invalid',
            disabled: true,
            triggerValue: ''
        },
        {
            label: 'Option 4 Disabled',
            value: 'Option 4 Disabled',
            compact: '',
            state: 'warning',
            disabled: true,
            triggerValue: ''
        },
        {
            label: 'Option 5 Disabled',
            value: 'Option 5 Disabled',
            compact: '',
            state: 'information',
            disabled: true,
            triggerValue: ''
        }
    ];

    itemsCompact = [
        {
            label: 'Option 1',
            value: 'Option 1',
            compact: true,
            state: 'default',
            disabled: false,
            triggerValue: ''
        },
        {
            label: 'Option 2',
            value: 'Option 2',
            compact: true,
            state: 'valid',
            disabled: false,
            triggerValue: ''
        },
        {
            label: 'Option 3',
            value: 'Option 3',
            compact: true,
            state: 'invalid',
            disabled: false,
            triggerValue: ''
        },
        {
            label: 'Option 4',
            value: 'Option 4',
            compact: true,
            state: 'warning',
            disabled: false,
            triggerValue: ''
        },
        {
            label: 'Option 5',
            value: 'Option 5',
            compact: true,
            state: 'information',
            disabled: false,
            triggerValue: ''
        }
    ];
}
