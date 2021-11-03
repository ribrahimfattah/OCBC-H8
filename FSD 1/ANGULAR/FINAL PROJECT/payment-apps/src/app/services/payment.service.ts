import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  endpoint: string = 'https://payment-030.herokuapp.com/finalproject/paymentdetails'

  constructor(private http: HttpClient) { }

  getPayment() {
    const api = `${this.endpoint}`;
    return this.http.get(api);
  }

  getPaymentbyId(id: number): Observable<any[]> {
    const api = `${this.endpoint}/${id}`
    return this.http.get<any[]>(api)
  }

  postPayment(payment: any) {
    console.log(payment)
    const api = `${this.endpoint}`
    return this.http.post(api, payment)
  }

  putPayment(payment: any, id: number) {
    console.log(payment)
    const api = `${this.endpoint}/${id}`
    return this.http.put(api, payment)
  }

  deletePayment(id: number) {
    const api = `${this.endpoint}/${id}`
    return this.http.delete(api)
  }
}
