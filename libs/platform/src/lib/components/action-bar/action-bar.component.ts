import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter,
    ChangeDetectorRef
} from '@angular/core';

@Component({
    selector: 'fdp-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBarComponent implements OnInit {
    /**
     * Actionbar title
     */ s;
    @Input()
    title: string;

    /**
     * Actionbar description
     */
    @Input()
    description: string;

    /**
     * Show "back" button.
     */
    @Input()
    showBackButton = false;

    /**
     * "back" button label.
     */
    @Input()
    backButtonLabel = 'Go Back';

    /**
     * Emitted event when "back" button is clicked.
     */
    @Output()
    backButtonClick: EventEmitter<void> = new EventEmitter();

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {}
}
