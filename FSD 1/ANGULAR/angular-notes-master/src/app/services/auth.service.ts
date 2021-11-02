import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<any> {
    const api = `${this.endpoint}/register`;

    return this.http
      .post(api, user)
      .pipe(catchError(this.handleError))
  }

  signIn(user: User) {
    const api = `${this.endpoint}/login`;

    return this.http
      .post(api, user)
      .subscribe(res: any)=> {
      localStorage
    }
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent)
      return throwError(error.error.message)
    else
      return throwError(`Service-side error code: ${error.status}\nMessage: ${error.message}`)
  }
}
