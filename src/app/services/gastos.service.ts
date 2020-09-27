import { Gasto } from './../models/gasto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  URL = 'https://localhost:44384/api/gastos';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  obtenerGastos(){
    return this.http.get<Gasto[]>(this.URL);
  }

  obtenerGasto(id: Number){
    return this.http.get<Gasto>(this.URL + '/' + id);
  }

  eliminarGasto(id: Number){
    return this.http.delete(this.URL + '/' + id);
  }

  crearGasto(gasto: Gasto){
    return this.http.post<Gasto>(this.URL, gasto);
  }

  editarGasto(gasto: Gasto){
    return this.http.put<Gasto>(this.URL + '/' + gasto.idGasto, gasto);
  }
}
