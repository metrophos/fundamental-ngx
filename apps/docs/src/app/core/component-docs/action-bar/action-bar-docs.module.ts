import { NgModule } from '@angular/core';
import { ActionBarDocsComponent } from './action-bar-docs.component';
import { ActionBarHeaderComponent } from './action-bar-header/action-bar-header.component';
import {
    ActionBarBackExampleComponent,
    ActionBarContextualMenuExampleComponent,
    ActionBarLongStringTitleTruncationExampleComponent,
    ActionBarMobileExampleComponent,
    ActionBarNoBackExampleComponent,
    ActionBarMediumLargeExampleComponent,
    ActionBarXtraLargeExampleComponent
} from './examples/action-bar-examples.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../api-files';
import { SharedDocumentationModule } from '../../../documentation/shared-documentation.module';
import { ActionBarModule } from '@fundamental-ngx/core';

const routes: Routes = [
    {
        path: '',
        component: ActionBarHeaderComponent,
        children: [
            { path: '', component: ActionBarDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.actionBar } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationModule, ActionBarModule],
    exports: [RouterModule],
    declarations: [
        ActionBarDocsComponent,
        ActionBarHeaderComponent,
        ActionBarBackExampleComponent,
        ActionBarMobileExampleComponent,
        ActionBarNoBackExampleComponent,
        ActionBarContextualMenuExampleComponent,
        ActionBarLongStringTitleTruncationExampleComponent,
        ActionBarMediumLargeExampleComponent,
        ActionBarXtraLargeExampleComponent
    ]
})
export class ActionBarDocsModule {}
