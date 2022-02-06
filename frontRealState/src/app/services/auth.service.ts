import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private routerService: Router,
    private cookies: CookieService
  ) { }

  login(loginData: any){
    return this.httpClient.post("http://localhost:5500/adviserMaster/login",loginData,{headers:{"Content-Type":"application/json"}})
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  setUser(user: any) {
    this.cookies.set("user", user)
  }

  getToken() {
    return this.cookies.get("token");
  }

  isLogged() {
    this.cookies.check("token")? true: false;
  }



}
