import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth-services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manish-flight-booking';
  constructor(private as:AuthService, private router: Router){
    if(this.as.isAuthenticated()){
      this.router.navigate(['dashboard'])
    }
  }
}
