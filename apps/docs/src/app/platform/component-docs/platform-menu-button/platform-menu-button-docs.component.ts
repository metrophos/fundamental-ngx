import { Component, OnInit } from '@angular/core';
import * as standardMenuButtonSrc from '!raw-loader!./platform-menu-button-examples/platform-menu-button-standard-example.component.html';
import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';

@Component({
    selector: 'app-link',
    templateUrl: './platform-menu-button-docs.component.html',
    styleUrls: ['./platform-menu-button-docs.component.scss']
})
export class PlatformMenuButtonDocsComponent implements OnInit {
    standardMenuButton: ExampleFile[] = [
        {
            language: 'html',
            code: standardMenuButtonSrc,
            fileName: 'platform-menu-button-standard-example'
        }
    ];

    constructor() {}

    ngOnInit() {}
}
