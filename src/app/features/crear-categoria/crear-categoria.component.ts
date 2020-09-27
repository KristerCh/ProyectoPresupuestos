import { CategoriaService } from './../../services/categoria.service';
import { Categoria } from './../../models/categoria';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  categorias: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { 
    this.categorias = new Categoria();
  }

  ngOnInit(): void {

  }

  crearCategoria(){
    this.categoriaService.crearCategoria(this.categorias).subscribe(() => {
      this.router.navigate(['/categoria']);
    },
    err =>{
      console.log(err);
    }
    )
    console.log(this.categorias);
}

cancelar(){
  this.router.navigate(['/categoria']);
}
}
