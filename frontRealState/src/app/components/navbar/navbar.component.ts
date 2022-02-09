import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userInfo: any =""
  public islog: any
  modalRef?: BsModalRef;

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private routerService: Router,
    private modalService: BsModalService
    ) { }

  ngOnInit(): void {
    this.getLoggedUser();
    this.isLogged();
  }

  getLoggedUser() {
    this.userInfo = this.cookieService.get("user")
    console.log(this.userInfo)
  }

  isLogged() {
    this.islog = this.authService.isLogged();
    return this.islog
  }

  logOut() {
    this.cookieService.delete("token");
    this.cookieService.delete("user");
    this.routerService.navigate(['/home'])
  }

  openModal(template: any) {
    this.modalRef = this.modalService.show(template);
  }

}
