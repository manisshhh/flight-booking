import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Login } from "./login.model";

@Injectable({
    providedIn:'root'
})

export class AuthService{
   private isloggedIn:boolean = false;

   constructor(private http: HttpClient){
       if(localStorage.getItem('token')){
           this.isloggedIn = true
       }
    }

   login(params: Login) {
       localStorage.setItem("token",'1234abcd');
       this.isloggedIn = true;
       return of({status: "success"})
   }
   

   isAuthenticated() {
       return this.isloggedIn
   }

   logOut() {
       localStorage.removeItem("token")
       this.isloggedIn = false;
   }
}