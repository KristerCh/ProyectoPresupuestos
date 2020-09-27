import { Categoria } from './../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  URL = 'https://localhost:44384/api/categoria';

  constructor(private http: HttpClient,
    private router: Router) { }

  obtenerCategorias(){
    return this.http.get<Categoria[]>(this.URL);
  }

  obtenerCategoria(id: Number){
    return this.http.get<Categoria>(this.URL + '/' + id);
  }

  eliminarCategoria(id: Number){
    return this.http.delete(this.URL + '/' + id);
  }

  crearCategoria(Categoria: Categoria){
    return this.http.post<Categoria>(this.URL, Categoria);
  }

  editarCategoria(categoria: Categoria){
    return this.http.put<Categoria>(this.URL + '/' + categoria.idCategoria, categoria);
  }
}
