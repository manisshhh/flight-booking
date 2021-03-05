import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth-services/auth.service';
import { Login } from '../auth-services/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginModel = new Login('','')
  constructor(private as: AuthService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  login(): any {

    if(!this.loginModel.email || !this.loginModel.password) {
      return  this.toastr.error('Email or password is required','Warning')
    }

    this.as.login(this.loginModel).subscribe((res:any)=>{



        if(res.token) {
          localStorage.setItem("token",res.token);
          this.as.isloggedIn = true;


        this.toastr.success('You have successfully logged in ','Success')
        this.router.navigate(['dashboard'])
      } else {
        this.toastr.error('email id is not registred or password is incorrect','Warning')
      }
    })
  }

}
