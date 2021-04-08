import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  readonly URL = environment.API_URL;

  constructor(private http:HttpClient) { }

  registerCustomer(customer) {
    return this.http.post<any>(this.URL + "/customers", customer);
  }

  getCustomers() {
    return this.http.get<any>(this.URL + "/customers");
  }

  getCustomer(id) {
    return this.http.get<any>(this.URL + "/customers/" + id);
  }

  updateCustomer(id, customer){
    return this.http.put<any>(this.URL + "/customers/" + id, customer);
  }

  deleteCustomer(id){
    return this.http.delete<any>(this.URL + "/customers/" + id);
  }

  calculateLoan(loan) {
    console.log(loan);
    return this.http.post<any>(this.URL + "/loan/calculateLoan", loan);
  }

  addLoan(loan) {
    return this.http.post<any>(this.URL + "/loan", loan);
  }

  updateLoan(id, loan) {
    return this.http.put<any>(this.URL + "/loan/" + id, loan);
  }

  getLoans() {
    return this.http.get<any>(this.URL + "/loan");
  }

  getLoan(id) {
    return this.http.get<any>(this.URL + "/loan/" + id);
  }

  getLoanByCustomer(id){
    return this.http.get<any>(this.URL + "/loan/by-customer/" + id);
  }

  deleteLoan(id) {
    return this.http.delete<any>(this.URL + "/loan/" + id);
  }

  sendEmail(customer){
    return this.http.post<any>(this.URL + "/email", customer);
  }
}
