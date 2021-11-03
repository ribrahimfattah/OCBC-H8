import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  payments: any
  data: any
  action: string = ""
  proccess = false

  paymentDataId: number = 0
  cardOwnerName: string = ""
  expirationDate: string = ""
  cardNumber: string = ""
  securityCode: string = ""

  message: string = 'Snack Bar opened.';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private payment: PaymentService, private snackBar: MatSnackBar) { }

  notif() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    this.snackBar.open(this.message, undefined, {
      duration: 2000,
      panelClass: ['red-snackbar']
      // horizontalPosition: this.horizontalPosition,
      // verticalPosition: this.verticalPosition
    });
  }

  ngOnInit(): void {
    this.payment.getPayment().subscribe(x => this.payments = x)
    this.proccess = false
  }

  getPaymentById(data: any) {
    this.action = data.action
    let obj: any
    this.payment.getPaymentbyId(data.id).subscribe(x => {
      obj = x
      // this.data = {
      this.paymentDataId = obj['paymentDataId'],
        this.cardOwnerName = obj['cardOwnerName'],
        this.cardNumber = obj['cardNumber'],
        this.expirationDate = obj['expirationDate'],
        this.securityCode = obj['securityCode']
      // }
      // console.log(this.cardOwnerName)
    })

  }

  store(payment: any) {
    this.proccess = true
    this.payment.postPayment(payment).subscribe(x => location.reload())
  }

  update(payment: any) {
    this.proccess = true
    this.payment.putPayment(payment, this.paymentDataId).subscribe(x => location.reload())
  }

  deletePayment(id: number) {
    this.payment.deletePayment(id).subscribe(x => location.reload())
  }
}
