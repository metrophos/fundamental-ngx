import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformMenuButtonDocsComponent } from './platform-menu-button-docs.component';

describe('MenuButtonExampleComponent', () => {
    let component: PlatformMenuButtonDocsComponent;
    let fixture: ComponentFixture<PlatformMenuButtonDocsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlatformMenuButtonDocsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlatformMenuButtonDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
