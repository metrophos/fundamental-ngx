import { NgModule } from '@angular/core';
import { SharedDocumentationModule } from '../documentation/shared-documentation.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './platform-documentation.routes';
import { PlatformDocumentationComponent } from './documentation/platform-documentation.component';
import { PlatformHomeComponent } from './component-docs/platform-home/platform-home.component';
import { MarkdownModule } from 'ngx-markdown';
import { PlatformButtonDocsComponent } from '../platform/component-docs/platform-button/platform-button-docs.component';
import { PlatformButtonHeaderComponent } from '../platform/component-docs/platform-button/platform-button-header/platform-button-header.component';
import { NewComponentComponent } from '../platform/component-docs/new-component/new-component.component';
import {
    PlatformButtonIconsExampleComponent,
    PlatformButtonOptionsExampleComponent,
    PlatformButtonSizesExampleComponent,
    PlatformButtonStateExampleComponent,
    PlatformButtonTypesExampleComponent,
    PlatformButtonTruncateExampleComponent
} from '../platform/component-docs/platform-button/platform-button-examples/platform-button-examples.component';
import {
    PlatformActionbarExamplesComponent
} from '../platform/component-docs/platform-action-bar/platform-action-bar-examples/platform-action-bar-simple-example.component';
import { PlatformActionbarWithBackButtonExampleComponent } from '../platform/component-docs/platform-action-bar/platform-action-bar-examples/platform-action-bar-with-back-button-example.component';
import { PlatformActionbarWithDescriptionExampleComponent } from '../platform/component-docs/platform-action-bar/platform-action-bar-examples/platform-action-bar-with-description-example.component';
import { PlatformActionbarWithLongPageTitleExampleComponent } from '../platform/component-docs/platform-action-bar/platform-action-bar-examples/platform-action-bar-with-long-title-example.component';
import { PlatformActionbarEditTitleExampleComponent } from '../platform/component-docs/platform-action-bar/platform-action-bar-examples/platform-action-bar-edit-title-example.component';
import { PlatformActionbarWithContextualMenuExampleComponent } from '../platform/component-docs/platform-action-bar/platform-action-bar-examples/platform-action-bar-contextual-menu-example.component';
import { PlatformActionbarWithPositiveNegativeActionsExampleComponent } from '../platform/component-docs/platform-action-bar/platform-action-bar-examples/platform-action-bar-positive-and-negative-action-example.component';
import { PlatformActionbarHeaderComponent } from '../platform/component-docs/platform-action-bar/platform-action-bar-header/platform-action-bar-header.component';
import { PlatformActionBarDocsComponent } from '../platform/component-docs/platform-action-bar/platform-action-bar-docs.component';
import { SchemaModule } from '../schema/schema.module';
import { PLATFORM_COMPONENT_SCHEMAS } from './component-docs/schemas';

import {
    PlatformLinkStandardExampleComponent,
    PlatformLinkEmphasizedExampleComponent,
    PlatformLinkDisabledExampleComponent,
    PlatformLinkDisabledEmphasizedExampleComponent,
    PlatformLinkInvertedExampleComponent,
    PlatformLinkTruncatedExampleComponent,
    PlatformLinkIconExampleComponent
} from './component-docs/platform-link/platform-link-examples/platform-link-examples.component';
import { PlatformLinkHeaderComponent } from './component-docs/platform-link/platform-link-header/platform-link-header.component';
import { PlatformLinkDocsComponent } from './component-docs/platform-link/platform-link-docs.component';

import { PlatformMenuDocsComponent } from './component-docs/platform-menu/platform-menu-docs.component';
import { PlatformMenuHeaderComponent } from './component-docs/platform-menu/platform-menu-header/platform-menu-header.component';
import { PlatformMenuBasicExampleComponent } from './component-docs/platform-menu/platform-menu-examples/platform-menu-basic-example.component';
import { PlatformMenuXPositionExampleComponent } from './component-docs/platform-menu/platform-menu-examples/platform-menu-x-position-example.component';
import { PlatformMenuCascadeExampleComponent } from './component-docs/platform-menu/platform-menu-examples/platform-menu-cascade-example.component';
import { PlatformMenuScrollingExampleComponent } from './component-docs/platform-menu/platform-menu-examples/platform-menu-scrolling-example.component';

import { PlatformSelectDocsComponent } from './component-docs/platform-select/platform-select-docs.component';
import { PlatformSelectHeaderComponent } from './component-docs/platform-select/platform-select-header/platform-select-header.component';
import { PlatformSelectTypesDefaultExampleComponent } from './component-docs/platform-select/platform-select-examples/platform-select-types-default-example.component';
import { PlatformSelectTypesNoBorderExampleComponent } from './component-docs/platform-select/platform-select-examples/platform-select-types-noborder-example.component';
import { PlatformSelectTypesSplitExampleComponent } from './component-docs/platform-select/platform-select-examples/platform-select-types-split-example.component';
import { PlatformSelectTypesWithIconExampleComponent } from './component-docs/platform-select/platform-select-examples/platform-select-types-with-icon-example.component';
import { StackblitzService } from '../documentation/core-helpers/stackblitz/stackblitz.service';
import { FundamentalNgxCoreModule } from '@fundamental-ngx/core';
import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
    declarations: [
        PlatformDocumentationComponent,
        PlatformHomeComponent,
        PlatformButtonDocsComponent,
        PlatformButtonIconsExampleComponent,
        PlatformButtonOptionsExampleComponent,
        PlatformButtonSizesExampleComponent,
        PlatformButtonTypesExampleComponent,
        PlatformButtonStateExampleComponent,
        PlatformButtonHeaderComponent,
        PlatformButtonTruncateExampleComponent,
        PlatformActionBarDocsComponent,
        PlatformActionbarHeaderComponent,
        PlatformActionbarExamplesComponent,
        PlatformActionbarWithBackButtonExampleComponent,
        PlatformActionbarWithDescriptionExampleComponent,
        PlatformActionbarWithLongPageTitleExampleComponent,
        PlatformActionbarEditTitleExampleComponent,
        PlatformActionbarWithContextualMenuExampleComponent,
        PlatformActionbarWithPositiveNegativeActionsExampleComponent,
        PlatformLinkStandardExampleComponent,
        PlatformLinkEmphasizedExampleComponent,
        PlatformLinkDisabledExampleComponent,
        PlatformLinkDisabledEmphasizedExampleComponent,
        PlatformLinkInvertedExampleComponent,
        PlatformLinkTruncatedExampleComponent,
        PlatformLinkIconExampleComponent,
        PlatformLinkHeaderComponent,
        PlatformLinkDocsComponent,
        PlatformMenuDocsComponent,
        PlatformMenuHeaderComponent,
        PlatformMenuBasicExampleComponent,
        PlatformMenuXPositionExampleComponent,
        PlatformMenuCascadeExampleComponent,
        PlatformMenuScrollingExampleComponent,
        NewComponentComponent,
        PlatformSelectDocsComponent,
        PlatformSelectHeaderComponent,
        PlatformSelectTypesDefaultExampleComponent,
        PlatformSelectTypesNoBorderExampleComponent,
        PlatformSelectTypesSplitExampleComponent,
        PlatformSelectTypesWithIconExampleComponent
    ],
    imports: [
        FundamentalNgxCoreModule,
        FundamentalNgxPlatformModule,
        SharedDocumentationModule,
        SchemaModule.forRoot(PLATFORM_COMPONENT_SCHEMAS),
        MarkdownModule.forChild(),
        RouterModule.forChild(ROUTES),
        ScrollingModule
    ],
    providers: [
        { provide: 'CURRENT_LIB', useValue: 'platform' },
        StackblitzService
    ]
})
export class PlatformDocumentationModule { }
