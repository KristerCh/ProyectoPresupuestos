import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  categorias: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categorias = new Categoria();
   }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    
    this.categoriaService.obtenerCategoria(id).subscribe(response => {
      this.categorias = response;
    });;
  }

  editarCategoria(){
    this.categoriaService.editarCategoria(this.categorias)
    .subscribe(() => {
      this.router.navigate(['/categoria']);
    });
  }

  cancelar(){
    this.router.navigate(['/categoria']);
  }
}
