import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatformRadioButtonComponent } from './radio.component';
import { RadioModule, FormModule, FormGroupComponent } from '@fundamental-ngx/core';

describe('RadioComponent', () => {
    let component: PlatformRadioButtonComponent;
    let fixture: ComponentFixture<PlatformRadioButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RadioModule, FormModule],
            declarations: [PlatformRadioButtonComponent, FormGroupComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlatformRadioButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('radio button with default property should be created', () => {
        component.id = 'id1';
        component.name = 'radio1';
        component.value = 'radio1';

        // forceRendere must be true for component creation
        component.forceRender = true;
        fixture.detectChanges();

        const inputElem = fixture.debugElement.query(By.css('input'));
        expect(inputElem.nativeElement.type).toEqual('radio');
        expect(inputElem.nativeElement.getAttribute('id')).toBeTruthy();
        expect(inputElem.nativeElement.getAttribute('ng-reflect-is-disabled')).toBeFalsy();
        expect(inputElem.nativeElement.getAttribute('ng-reflect-name')).toEqual('radio1');
        expect(inputElem.nativeElement.getAttribute('ng-reflect-value')).toEqual('radio1');

        expect(inputElem.nativeElement.classList.contains('fd-radio')).toBeTruthy();
    });

    it('radio button should be compact, valid state and disable', () => {
        component.id = 'id1';
        component.name = 'radio1';
        component.value = 'radio1';
        component.size = 'compact';
        component.state = 'valid';
        component.disabled = true;

        // forceRendere must be true for component creation
        component.forceRender = true;

        fixture.detectChanges();

        const inputElem = fixture.debugElement.query(By.css('input'));
        expect(inputElem.nativeElement.type).toEqual('radio');
        expect(inputElem.nativeElement.getAttribute('id')).toBeTruthy();
        expect(inputElem.nativeElement.getAttribute('ng-reflect-is-disabled')).toBeTruthy();
        expect(inputElem.nativeElement.getAttribute('ng-reflect-name')).toEqual('radio1');
        expect(inputElem.nativeElement.getAttribute('ng-reflect-value')).toEqual('radio1');

        expect(inputElem.nativeElement.classList.contains('fd-radio')).toBeTruthy();
        expect(inputElem.nativeElement.classList.contains('fd-radio--compact')).toBeTruthy();
        expect(inputElem.nativeElement.classList.contains('is-valid')).toBeTruthy();
        // ng-reflect-is-disabled
    });

    it('radio click should be called', () => {
        component.id = 'id1';
        component.name = 'radio1';
        component.value = 'radio1';
        component.size = 'compact';
        component.state = 'valid';
        component.disabled = true;

        // forceRendere must be true for component creation
        component.forceRender = true;
        fixture.detectChanges();

        const radioElem = fixture.debugElement.query(By.css('fd-radio-button'));

        spyOn(component, 'onRadioClick');
        radioElem.triggerEventHandler('click', null);
        expect(component.onRadioClick).toHaveBeenCalled();
    });
});
