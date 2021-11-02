import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  endpoint: string = 'http://localhost:4000/users'

  constructor(private http: HttpClient) { }

  getEmployee() {
    const api = `${this.endpoint}`;
    return this.http.get(api);
  }

  getEmployeebyId(id: number): Observable<any[]> {
    const api = `${this.endpoint}/${id}`
    return this.http.get<any[]>(api)
  }

  postEmployee(employee: any) {
    const api = `${this.endpoint}`
    return this.http.post(api, employee)
  }

  putEmployee(employee: any, id: number) {
    const api = `${this.endpoint}/${id}`
    return this.http.put(api, employee)
  }

  deleteEmployee(id: number) {
    const api = `${this.endpoint}/${id}`
    return this.http.delete(api)
  }
}
