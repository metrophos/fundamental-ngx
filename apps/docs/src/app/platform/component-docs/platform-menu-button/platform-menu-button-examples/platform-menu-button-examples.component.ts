import { Component, OnInit } from '@angular/core';
import { FdpItem } from '@fundamental-ngx/platform';

@Component({
    selector: 'fdp-platform-menu-button-standard-example',
    templateUrl: './platform-menu-button-standard-example.component.html'
})
export class PlatformMenuButtonStandardExampleComponent implements OnInit {
    basicMenuData: FdpItem[] = [];

    userDefined(event: Event) {
        console.log('log from userDefined function');
    }
    ngOnInit() {
        this.basicMenuData = [
            {
                label: 'First Item',
                command: () => {
                    alert('First');
                }
            },
            {
                label: 'Second Item',
                command: () => {
                    alert('second');
                }
            },
            {
                label: 'Third Item',
                command: () => {
                    alert('Third');
                }
            }
        ];
    }
}
