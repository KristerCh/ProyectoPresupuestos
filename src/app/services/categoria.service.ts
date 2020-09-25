import { Categoria } from './../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  URL = 'https://localhost:44384/api/categoria';

  constructor(private http: HttpClient) { }

  obtenerCategorias(){
    return this.http.get<Categoria[]>(this.URL);
  }
}
