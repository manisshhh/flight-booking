import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { environment } from "src/environments/environment";
import { Login } from "./login.model";

@Injectable({
    providedIn:'root'
})

export class AuthService{
   public isloggedIn:boolean = false;
   private apiUrl  = environment.api

   constructor(private http: HttpClient){
       if(localStorage.getItem('token')){
           this.isloggedIn = true
       }
    }

   login(params: Login): any {

     return this.http.post(`${this.apiUrl}login`,params)


   }


   isAuthenticated() {
       return this.isloggedIn
   }

   logOut() {
       localStorage.removeItem("token")
       this.isloggedIn = false;
   }
}
