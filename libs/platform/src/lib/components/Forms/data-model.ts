/**
 * Interface SelectItem is used to deal with complex object in order to be able to format
 * custom label that is shown in the options.
 */

export type stateType = 'valid' | 'invalid' | 'warning' | 'default' | 'information';

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

export class Money {
    constructor(
        public readonly amount: number = 0,
        public currency: string = 'USD',
        public readonly locale: string = 'en_US'
    ) {}

    getTypes(): any {
        return {
            amount: Number,
            currency: String,
            locale: String
        };
    }

    className(): string {
        return 'Money';
    }

    toString(): string {
        return this.amount + ', locale: ' + this.locale + ', code:  ' + this.currency;
    }

    clone(data: { amount?: number; currency?: string; locale?: string } = {}): Money {
        return new Money(
            isNaN(data.amount) ? this.amount : data.amount,
            data.currency ? data.currency : this.currency,
            data.locale ? data.locale : this.locale
        );
    }
}
