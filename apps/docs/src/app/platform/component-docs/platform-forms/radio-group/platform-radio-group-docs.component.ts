import { Component, OnInit } from '@angular/core';
import * as listItemsRadioGroupSrc from '!raw-loader!./platform-radio-group-examples/platform-radio-group-list-items-example.component.html';
import * as listRadioGroupSrc from '!raw-loader!./platform-radio-group-examples/platform-radio-group-list-example.component.html';
import { ExampleFile } from '../../../../documentation/core-helpers/code-example/example-file';

@Component({
    selector: 'app-radio-group',
    templateUrl: './platform-radio-group-docs.component.html',
    styleUrls: ['./platform-radio-group-docs.component.scss']
})
export class PlatformRadioGroupDocsComponent implements OnInit {
    listItemsRadioGroup: ExampleFile[] = [
        {
            language: 'html',
            code: listItemsRadioGroupSrc,
            fileName: 'platform-radio-group-list-items-example'
        }
    ];

    listRadioGroup: ExampleFile[] = [
        {
            language: 'html',
            code: listRadioGroupSrc,
            fileName: 'platform-radio-group-list-example'
        }
    ];

    constructor() {}

    ngOnInit() {}
}
