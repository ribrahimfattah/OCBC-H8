import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { CustomValidators } from '../validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  payments: any;
  isSubmitted = false

  @Input() paymentDataId: number = 0
  @Input() cardOwnerName: string = ""
  @Input() expirationDate: string = ""
  @Input() cardNumber: string = ""
  @Input() securityCode: string = ""
  @Input() action: string = ""
  @Input() proccess = false

  @Output() updateEvent = new EventEmitter<any>()
  @Output() createEvent = new EventEmitter<any>()


  constructor() { }

  // ======================== VALIDATION
  formData = new FormGroup({
    cardOwnerName: new FormControl('', [
      Validators.required
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      // Validators.minLength(10),
      // Validators.maxLength(10),
      // CustomValidators.checkLimit(10, 10),
      CustomValidators.min(1000000000)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      CustomValidators.min(100000)
    ]),
    expirationDate: new FormControl('', [
      Validators.required
    ])
  })

  // ================ GETTER
  get getCardOwnerName() {
    return this.formData.get('cardOwnerName')
  }

  get getCardNumber() {
    return this.formData.get('cardNumber')
  }

  get getSecurityCode() {
    return this.formData.get('securityCode')
  }

  get getExpirationDate() {
    return this.formData.get('expirationDate')
  }
  ngOnInit(): void {
    this.action = "create"
    console.log(this.action)
    // console.log(this.action)
  }

  actionToggle() {
    this.isSubmitted = true
    if (!this.getCardOwnerName?.errors && !this.getCardNumber?.errors && !this.getSecurityCode?.errors && !this.getExpirationDate?.errors) {
      if (this.action == "create") {
        this.create()
      }
      if (this.action == "edit") {
        this.edit()
      }
    }
  }

  reset() {
    this.action = "create"
    console.log("ini create reset")
  }

  create() {
    this.payments = {
      cardOwnerName: this.cardOwnerName,
      cardNumber: this.cardNumber.toString(),
      securityCode: this.securityCode.toString(),
      expirationDate: this.expirationDate
    }
    // console.log("ini create")
    this.createEvent.emit(this.payments)
  }

  edit() {
    this.payments = {
      paymentDataId: this.paymentDataId,
      cardOwnerName: this.cardOwnerName,
      cardNumber: this.cardNumber,
      securityCode: this.securityCode,
      expirationDate: this.expirationDate
    }
    // console.log("ini edit")
    this.updateEvent.emit(this.payments)
  }

}
