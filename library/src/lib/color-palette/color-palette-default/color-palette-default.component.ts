import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'fd-color-palette-default',
  templateUrl: './color-palette-default.component.html',
  styleUrls: ['./color-palette-default.component.scss']
})
export class ColorPaletteDefaultComponent implements OnInit {

  @Input()
  defaultColor: string = 'black';

  @Output()
  selectedDefaultColor: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectDefaultColor(): void {
    console.log('default clicked. in child component!');
    this.selectedDefaultColor.emit(this.defaultColor);
  }

}