import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button.component';
import { ButtonModule } from '@fundamental-ngx/core';
import { FdpMenuModule } from './../menu/menu.module';

@NgModule({
    declarations: [MenuButtonComponent],
    imports: [CommonModule, ButtonModule, FdpMenuModule],
    exports: [MenuButtonComponent]
})
export class PlatformMenuButtonModule {}
