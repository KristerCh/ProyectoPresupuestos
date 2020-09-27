import { Ingreso } from './../models/ingreso';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  URL = 'https://localhost:44384/api/ingresos';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  obtenerIngresos(){
    return this.http.get<Ingreso[]>(this.URL);
  }

  obtenerIngreso(id: Number){
    return this.http.get<Ingreso>(this.URL + '/' + id);
  }

  eliminarIngresos(id: Number){
    return this.http.delete(this.URL + '/' + id);
  }

  crearIngreso(ingreso: Ingreso){
    return this.http.post<Ingreso>(this.URL, ingreso);
  }

  editarIngreso(ingreso: Ingreso){
    return this.http.put<Ingreso>(this.URL + '/' + ingreso.idIngreso, ingreso);
  }

}
