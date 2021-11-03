import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment-data',
  templateUrl: './payment-data.component.html',
  styleUrls: ['./payment-data.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PaymentDataComponent implements OnInit {

  @Input() payments: any;

  @Output() clickDataEvent = new EventEmitter<{ id: number, action: string }>();
  @Output() clickDeleteEvent = new EventEmitter<number>();

  idDelete: number = 0;
  delete = false;
  clickCount = 0;
  action: string = ""

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any, id: number) {
    this.idDelete = id;
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
  }

  clickData(id: number) {
    if (!this.delete) {
      // this.clickDataEvent.emit(id)
    }
  }

  clickDelete(id: number) {
    this.delete = true;
    this.clickDeleteEvent.emit(id)
  }

  isDelete() {
    this.clickDelete(this.idDelete)
  }

  click(id: number) {
    this.clickCount++;
    setTimeout(() => {
      if (this.clickCount === 1) {
        // single
        this.action = "read"
      } else if (this.clickCount === 2) {
        // double
        this.action = "edit"
      }
      this.clickDataEvent.emit({ id: id, action: this.action })
      // console.log(this.action)
      this.clickCount = 0;
    }, 250)
  }
}
