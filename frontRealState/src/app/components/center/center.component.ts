import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {PropertiesService} from 'src/app/services/properties.service'
import { ConfigService } from 'src/app/services/config.services';
import { CityDataAPIService } from 'src/app/services/city-data-api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  public form: FormGroup
  public title: AbstractControl
  public businessType: AbstractControl
  public propertyType: AbstractControl
  public city: AbstractControl
  public zone: AbstractControl
  public address: AbstractControl
  public description: AbstractControl
  public price: AbstractControl
  public propertyImages: AbstractControl
  public rooms: AbstractControl
  public bathrooms: AbstractControl
  public adviser: AbstractControl
  public status: AbstractControl
  public propertyMaster: any[] = []
  public cityMaster: any[] = []

  constructor(
    private propertiesService: PropertiesService,
    private cityDataAPIService: CityDataAPIService,
    public formBuilder: FormBuilder,
    public config: ConfigService) {
      this.form = this.formBuilder.group({
        title: ['', Validators.required],
        businessType: ['', Validators.required],
        propertyType: ['', Validators.required],
        city: ['', Validators.required],
        zone: ['', Validators.required],
        address: ['', Validators.required],
        description: ['', Validators.required],
        price:['', Validators.required],
        propertyImages: ['', Validators.required],
        rooms: ['', Validators.required],
        bathrooms: ['', Validators.required],
        adviser: ['', Validators.required],
        status: ['', Validators.required]
      })
      this.title = this.form.controls['title']
      this.businessType = this.form.controls['businessType']
      this.propertyType = this.form.controls['propertyType']
      this.city = this.form.controls['city']
      this.zone = this.form.controls['zone']
      this.address = this.form.controls['address']
      this.description = this.form.controls['description']
      this.price = this.form.controls['price']
      this.propertyImages = this.form.controls['propertyImages']
      this.rooms = this.form.controls['rooms']
      this.bathrooms = this.form.controls['bathrooms']
      this.adviser = this.form.controls['adviser']
      this.status = this.form.controls['status']
    }

  ngOnInit(): void {
    this.listProperties()
    this.listCities()
  }

  get f() {
    return this.form.controls
  }

  listProperties() {
    this.propertiesService.listProperties().subscribe({
      next: (res: any) => {
        if (res.length > 0) {
          this.propertyMaster = res
          console.log(this.propertyMaster)
        }
      },
      complete: () => {console.log('propiedades listadas')},
      error: () => {console.log('Error al listar propiedades')}
    })
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


/*
  createProperty(item: any) {
    var _title: item.title
    const _businessType: item.businessType
    const _propertyType: item.propertyType
    const _city: item.city
    const _zone: item.zone
    const _address: item.address
    const _description: item.description
    const _price: item.price
    const _propertyImages: item.propertyImages
    const _rooms: item.rooms
    const _bathrooms: item.bathrooms
    const _adviser: item.adviser

    const {value: formValues} = Swal.fire({
      title: 'Crear Nueva Propiedad',
      html:
      `
      <form>
        <input type="text" name="" id="title" placeholder="Ingresa el título de la publicación">
        <select name="" id="businessType">
            <option hidden value="" disabled selected>Indica el tipo de negocio</option>
            <option value="">Venta</option>
            <option value="">Alquiler</option>
        </select>
        <select name="" id="propertyType">
            <option hidden value="" disabled selected>Indica el tipo de propiedad</option>
            <option value="">Apartamento</option>
            <option value="">Casa</option>
            <option value="">Comercial</option>
            <option value="">Oficina</option>
        </select>
        <select name="" id="city" >
            <option hidden value="" disabled selected>Indica la ciudad/municipio</option>
            <option class="option" *ngFor="let city of cityMaster">{{city.municipio}}</option>
        </select>
        <input type="text" name="" id="zone" placeholder="Indica la zona">
        <input type="text" name="" id="address" placeholder="Ingresa la dirección">
        <input type="text" name="" id="description" placeholder="Ingresa la descripción de la propiedad">
        <input type="number" name="" id="price" placeholder="Ingresa el precio sin puntos ni comas">
        <input type="text" name="" id="propertyImages" placeholder="Ingresa las imagenes">
        <input type="number" name="" id="rooms" placeholder="Ingresa la cantidad de habitaciones">
        <input type="number" name="" id="bathrooms" placeholder="Ingresa la cantidad de baños">
        <select name="" id="adviser">
            <option hidden value="" disabled selected>Indica el nombre del asesor</option>
            <option value="">Andres Fandiño</option>
            <option value="">Angie Salas</option>
        </select>
      </form>
      `,

    })
  }
*/





  /*
  list() {
    this.productService.listProducts().subscribe({
      next: (res: any) => {
        if (res.length > 0) {
          setTimeout(() => {
            this.productMaster = res
            this.loading = false
          }, 1500)
        } else {
          setTimeout(() => {
            this.loading = false
          }, 1500)
        }
      },
      complete: () => { 'Productos Listados' }, // completeHandler
      error: () => { console.log('Error to the products user') }    // errorHandler
    })
  }
  */


}
