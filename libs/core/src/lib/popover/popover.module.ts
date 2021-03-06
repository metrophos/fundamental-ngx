import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverComponent } from './popover.component';
import { PopoverControlComponent } from './popover-control/popover-control.component';
import { PopoverBodyComponent } from './popover-body/popover-body.component';
import { PopoverDirective } from './popover-directive/popover.directive';
import { PopoverContainer } from './popover-directive/popover-container';
import { PopoverDropdownComponent } from './popover-dropdown/popover-dropdown.component';
import { PopoverBodyHeaderDirective } from './popover-body/popover-body-directives/popover-body-header.directive';
import { PopoverBodyFooterDirective } from './popover-body/popover-body-directives/popover-body-footer.directive';

import { ButtonModule } from '../button/button.module';

@NgModule({
    declarations: [
        PopoverComponent,
        PopoverControlComponent,
        PopoverBodyComponent,
        PopoverDirective,
        PopoverContainer,
        PopoverDropdownComponent,
        PopoverBodyHeaderDirective,
        PopoverBodyFooterDirective
    ],
    imports: [CommonModule, ButtonModule],
    exports: [
        PopoverComponent,
        PopoverControlComponent,
        PopoverBodyComponent,
        PopoverDirective,
        PopoverDropdownComponent,
        PopoverBodyHeaderDirective,
        PopoverBodyFooterDirective
    ],
    entryComponents: [PopoverContainer]
})
export class PopoverModule { }
