import { Component, OnInit } from '@angular/core';
import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';

import * as platformBasicSearchFieldSrc from '!raw-loader!./platform-search-field-examples/platform-search-field-basic-example.component.html';
import * as platformBasicSearchFieldTsCode from '!raw-loader!./platform-search-field-examples/platform-search-field-basic-example.component.ts';

@Component({
    selector: 'app-search-field',
    templateUrl: './platform-search-field-docs.component.html'
})
export class PlatformSearchFieldDocsComponent implements OnInit {
    searchFieldBasic: ExampleFile[] = [
        {
            language: 'html',
            code: platformBasicSearchFieldSrc,
            fileName: 'platform-menu-basic-example'
        },
        {
            language: 'typescript',
            code: platformBasicSearchFieldTsCode,
            fileName: 'platform-menu-basic-example',
            component: 'PlatformMenuBasicExampleComponent'
        }
    ];

    ngOnInit() {
    }

}