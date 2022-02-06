import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './components/center/center.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PropertyManagementComponent } from './components/property-management/property-management.component';


const routes: Routes = [
  {path: "", component: MainComponent, pathMatch: "full"},
  {path: "home", component: HomeComponent, pathMatch: "full"},
  {path: "login", component: LoginComponent, pathMatch: "full"},
  {path: "main", component: MainComponent, pathMatch: "full"},
  {path: "propertyManagement", component: PropertyManagementComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
