import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { setTheme } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontRealState';
  islog: any

  constructor(
    private authService: AuthService
  ) {
    setTheme('bs5');
  }

  NgOnInit () {
    this.showNavbar()
  }

  showNavbar() {
    this.islog = this.authService.isLogged();
    return this.islog
  }

}
