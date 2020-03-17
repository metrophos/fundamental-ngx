import { NgModule } from '@angular/core';

import { DisplayFnPipe } from './displayFn.pipe';
import { SearchHighlightPipe } from './search-highlight.pipe';
import { TwoDigitsPipe } from './two-digits.pipe';
import { GroupByPipe } from './groupBy.pipe';

@NgModule({
    declarations: [
        DisplayFnPipe,
        SearchHighlightPipe,
        TwoDigitsPipe,
        GroupByPipe
    ],
    exports: [
        DisplayFnPipe,
        SearchHighlightPipe,
        TwoDigitsPipe,
        GroupByPipe
    ]
})
export class PipeModule {}
