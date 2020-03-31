import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button.component';
import { PlatformButtonModule } from './../button/button.module';
import { FdpMenuModule } from './../menu/menu.module';

@NgModule({
    declarations: [MenuButtonComponent],
    imports: [CommonModule, PlatformButtonModule, FdpMenuModule],
    exports: [MenuButtonComponent]
})
export class PlatformMenuButtonModule {}
