/**
 * Interface SelectItem is used to deal with complex object in order to be able to format
 * custom label that is shown in the options.
 */

import { stateType } from '@fundamental-ngx/core';

export interface SelectItem {
    /**
     * Item text shown in the popup
     */
    label: string;

    /**
     * References to the object instance
     */
    value: any;
    disabled?: boolean;

    /**
     * Trigger values is a text for selected item
     */
    triggerValue?: string;

    /**
     * Type Radio button/ Checkbox
     */
    state: stateType;
}

export function isSelectItem(item: SelectItem): item is SelectItem {
    return item && item.label !== undefined && item.value !== undefined;
}
