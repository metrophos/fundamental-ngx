import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformRadioGroupDocsComponent } from './platform-radio-group-docs.component';

describe('radioGroupExampleComponent', () => {
    let component: PlatformRadioGroupDocsComponent;
    let fixture: ComponentFixture<PlatformRadioGroupDocsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlatformRadioGroupDocsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlatformRadioGroupDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
