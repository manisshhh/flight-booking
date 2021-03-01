import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-services/auth.service';
import { Login } from '../auth-services/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginModel = new Login('','')
  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginModel)
    this.as.login(this.loginModel).subscribe((res:any)=>{
      console.log(res)
      if(res.status == 'success'){
        this.router.navigate(['dashboard'])
      }
    })
  }

}
