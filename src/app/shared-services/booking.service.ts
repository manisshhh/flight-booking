import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private API_URL: string = environment.api
  customerList : any;
  fromCity : any = {}
  toCity : any = {}

  constructor(private http: HttpClient) {
  }

  getAirports() {
    return this.http.get(`${this.API_URL}airports`)
  }

  addCustomers(params:any) {
    return this.http.post(`${this.API_URL}add-customer`,params)
  }

  getCustomers(){
    return this.http.get(`${this.API_URL}`)
  }


  updateCustomer(params: any) {
   return this.http.put(`${this.API_URL}update-customer/${params._id}`,params)
  }

  deleteCustomer(id: any) {
   return this.http.delete(`${this.API_URL}delete-customer/${id}`)
  }
}
