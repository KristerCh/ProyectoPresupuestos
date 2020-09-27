import { CategoriaService } from './../../services/categoria.service';
import { Categoria } from './../../models/categoria';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {
  categoria: Categoria[];

  constructor(private categoriaService: CategoriaService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){
    this.categoriaService.obtenerCategorias().subscribe(data => {
      this.categoria = data;
    })
  }

  crearCategoria(){
    this.router.navigate(['/categoria/crear']);
  }

  editarCategoria(id: Number){
    this.router.navigate(['/categoria/editar', id]);
  }

  deleteCategoria(id: Number){
    const res = confirm("Desea eliminar este registro?");
    if(res){
      this.categoriaService.eliminarCategoria(id).subscribe(() => {
        this.getCategorias();
      })
    }
  }

}
