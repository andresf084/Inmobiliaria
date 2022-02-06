import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    user: "",
    password: ""
  };
  public completeData = false


  constructor(
    public authService: AuthService,
    private routerService: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if(this.loginData.password! && this.loginData.user!){
      console.log(this.loginData.user)
      console.log(this.loginData.password)
      const user = {user: this.loginData.user, password: this.loginData.password};
      this.authService.login(user).subscribe( data => {
      console.log(data);
      this.authService.setToken((data as any).token);
      this.authService.setUser((data as any).user);
      this.routerService.navigateByUrl("/propertyManagement")
    });
    }else{
      this.completeData = true;
      console.log("error")
    }
  }

  hideAlert(){
    this.completeData = false
  }


}
