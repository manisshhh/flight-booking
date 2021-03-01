import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth-services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean= false

  constructor(private as: AuthService, private router:Router) { }

  ngOnInit(): void {
    if(this.as.isAuthenticated()){
      this.isLoggedIn = true
    }
  }

  logout(){
    this.as.logOut()
    this.router.navigate(['/'])
  }
}
