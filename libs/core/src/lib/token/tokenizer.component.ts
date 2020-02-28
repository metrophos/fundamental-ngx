import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren, ElementRef,
    forwardRef, HostListener,
    Input,
    QueryList,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { FormControlDirective } from '../form/form-control/form-control.directive';
import { TokenComponent } from './token.component';

@Component({
  selector: 'fd-tokenizer',
  templateUrl: './tokenizer.component.html',
  styleUrls: ['./tokenizer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TokenizerComponent implements AfterViewInit, AfterContentInit {

    /** @hidden */
    @ContentChildren(forwardRef(() => TokenComponent))
    tokenList: QueryList<TokenComponent>;

    /** @hidden */
    @ContentChild(forwardRef(() => FormControlDirective), {static: true})
    input: FormControlDirective;

    /** @hidden */
    @ViewChild('moreElement', {static: true})
    moreElement: HTMLElement;

    /** Used to add focus class to the tokenizer-example */
    @Input()
    tokenizerHasFocus: boolean = false;

    /** Whether the tokenizer-example is compact */
    @Input()
    compact: boolean = false;

    /** The value for the tokenizer input */
    @Input()
    inputValue: string;

    /** @hidden */
    previousElementWidth: number;

    /** @hidden */
    hiddenCount: number = 0;

    /** @hidden */
    ngAfterViewInit(): void {
        if (this.input && this.input.elementRef) {
            this.input.elementRef.nativeElement.addEventListener('keydown', (event) => {
                this.handleKeyDown(event, this.tokenList.length);
            });
        }
        console.log('sdfjsdlkfjlksdjfljsdf');
        console.log(this.moreElement);
    }

    /** @hidden */
    handleKeyDown(event: KeyboardEvent, fromIndex: number): void {
        let newIndex: number;
        if (event.code === 'ArrowLeft') {
            newIndex = fromIndex - 1;
        } else if (event.code === 'ArrowRight') {
            newIndex = fromIndex + 1;
        }
        if (newIndex === this.tokenList.length && event.code === 'ArrowRight') {
            this.input.elementRef.nativeElement.focus();
        } else if (newIndex || newIndex === 0) {
            this.focusTokenElement(event, newIndex);
        }
    }

    /** @hidden */
    focusTokenElement(event: KeyboardEvent, newIndex: number): HTMLElement {
        let elementToFocus: HTMLElement;
        if (newIndex >= 0 && newIndex < this.tokenList.length) {
            elementToFocus = this.tokenList.filter((element, index) => index === newIndex)[0]
                .elementRef.nativeElement.querySelector('.fd-token');
            // element needs tabindex in order to be focused
            elementToFocus.setAttribute('tabindex', '0');
            elementToFocus.focus();
            this.addKeyboardListener(elementToFocus, newIndex);
        }

        return elementToFocus;
    }

    /** @hidden */
    addKeyboardListener(element: HTMLElement, newIndex: number): void {
        // function needs to be defined in order to be referenced later by addEventListener/removeEventListener
        const handleFunctionReference = (e) => {
            if (newIndex || newIndex === 0) {
                this.handleKeyDown(e, newIndex);
            }
        };
        element.addEventListener('keydown', handleFunctionReference);
        element.addEventListener('blur', () => {
            element.setAttribute('tabindex', '-1');
            element.removeEventListener('keydown', handleFunctionReference);
        });
    }

    /** @hidden */
    @HostListener('window:resize', [])
    onResize(): void {
        const elementWidth = this.elementRef.nativeElement.getBoundingClientRect().width;
        if (elementWidth <= this.previousElementWidth) {
            this.collapseTokens();
        } else {
            this.expandTokens();
        }
        this.previousElementWidth = elementWidth;
    }

    /** @hidden */
    collapseTokens(): void {
        let elementWidth = this.elementRef.nativeElement.getBoundingClientRect().width; // the fd-tokenizer element
        let innerWidth = this.getInnerWidth(); // the combined width of all tokens, the "____ more" text, and the input
        let i = 0;
        while (innerWidth >= elementWidth && i < this.tokenList.length) {
            const token = this.tokenList.filter((item, index) => index === i)[0];
            token.elementRef.nativeElement.style.display = 'none';
            elementWidth = this.elementRef.nativeElement.getBoundingClientRect().width;
            innerWidth = this.getInnerWidth();
            i++;
            this.hiddenCount = i;
        }
    }

    /** @hidden */
    expandTokens(): void {
        let elementWidth = this.elementRef.nativeElement.getBoundingClientRect().width; // the fd-tokenizer element
        let innerWidth = this.getInnerWidth(); // the combined width of all tokens, the "____ more" text, and the input
        let i = 0;
        let breakLoop = false;
        const originalHiddenCount = this.hiddenCount;
        while (innerWidth < elementWidth && i < originalHiddenCount && !breakLoop) {
            // we want to get the first hidden token and check to see if it can fit in the whole tokenizer
            const tokenToCheck = this.tokenList.filter(token => token.elementRef.nativeElement.style.display === 'none')[0];
            /*
              set display: 'inline-block' and visibility: 'hidden' - this way, the tokenizer width will
              contain the width of the token we might display, without actually making the token visible to the user
             */
            tokenToCheck.elementRef.nativeElement.style.display = 'inline-block';
            tokenToCheck.elementRef.nativeElement.style.visibility = 'hidden';
            elementWidth = this.elementRef.nativeElement.getBoundingClientRect().width;
            innerWidth = this.getInnerWidth();
            /*
              if the width of the inner tokenizer component is still smaller than the whole tokenizer component, we'll
              make the token visible and reduce the hidden count
            */
            if (innerWidth < elementWidth) {
                tokenToCheck.elementRef.nativeElement.style.visibility = 'visible';
                this.hiddenCount--;
            } else {
                // otherwise, stop looping and set the token's display back to 'none'
                tokenToCheck.elementRef.nativeElement.style.display = 'none';
                breakLoop = true;
            }
            i++;
        }
    }

    /** @hidden */
    getInnerWidth(): number {
        let totalTokenWidth = 0;
        this.tokenList.forEach(token => {
            totalTokenWidth = totalTokenWidth + token.elementRef.nativeElement.getBoundingClientRect().width;
        });
        totalTokenWidth = totalTokenWidth + this.input.elementRef.nativeElement.getBoundingClientRect().width; // add input width
        if (this.hiddenCount > 0 && this.moreElement && this.moreElement.nativeElement) {
            totalTokenWidth = totalTokenWidth + this.moreElement.nativeElement.getBoundingClientRect().width;
        }

        return totalTokenWidth;
    }

    /** @hidden */
    ngAfterContentInit() {
        this.previousElementWidth = this.elementRef.nativeElement.getBoundingClientRect().width;
        this.onResize();
    }

    constructor(private elementRef: ElementRef) {}

}
