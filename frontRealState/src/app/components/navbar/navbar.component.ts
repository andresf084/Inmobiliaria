import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userInfo: any =""

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    this.getLoggedUser();
  }

  getLoggedUser() {
    this.userInfo = this.cookieService.get("user")
    console.log(this.userInfo)
  }

  isLogged() {
    this.cookieService.check("token")? true: false
  }

}
