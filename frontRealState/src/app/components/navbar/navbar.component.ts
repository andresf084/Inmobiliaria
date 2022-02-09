import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CityDataAPIService } from 'src/app/services/city-data-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userInfo: any ="";
  public islog: any;
  modalRef?: BsModalRef;
  config = {
    animated: true
  };
  public items: any[] = [];
  public cityMaster: any[] = []
  public letters = ["","A"," B"," C"," D"," E"," F"," G"," H"," I"," J"," K"," L"," M"," N"," Ñ"," O"," P"," Q"," R"," S"," T"," U"," V"," W"," X"," Y"," Z"]

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private routerService: Router,
    private modalService: BsModalService,
    private cityDataAPIService: CityDataAPIService
    ) {
      this.items = Array(15).fill(0);
    }

  ngOnInit(): void {
    this.getLoggedUser();
    this.isLogged();
    this.listCities();
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
    this.modalRef = this.modalService.show(template, this.config);
  }

  listCities() {
    this.cityDataAPIService.listCitiesAPI().subscribe({
      next: (res: any) => {
        console.log(res)
        const res2: any = Object.values(res)
        if (res2[0].length > 0) {
          this.cityMaster = res2[0]
          console.log(this.cityMaster)
        }
      },
      complete: () => { console.log('List cities success') }, // completeHandler
      error: () => { console.log('List cities error') }    // errorHandler
    })
  }

}
