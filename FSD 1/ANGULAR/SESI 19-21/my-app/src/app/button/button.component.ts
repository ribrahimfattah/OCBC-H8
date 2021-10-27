import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() name = '';
  @Input() name2 = '';
  @Input() isDisabled = false;

  @Output() clickEventHandler = new EventEmitter();
  @Output() resetEventHandler = new EventEmitter();

  constructor() { }

  // buat function untuk handle event
  onBtnClick() {
    this.clickEventHandler.emit();
  }

  onBtnReset() {
    this.resetEventHandler.emit();
  }

  ngOnInit(): void {
  }

}
