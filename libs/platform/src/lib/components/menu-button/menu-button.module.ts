import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button.component';
import { ButtonModule } from '@fundamental-ngx/core';

@NgModule({
    declarations: [MenuButtonComponent],
    imports: [CommonModule, ButtonModule],
    exports: [MenuButtonComponent]
})
export class PlatformMenuButtonModule {}
