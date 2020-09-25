import { CategoriaService } from './../../services/categoria.service';
import { IngresoService } from './../../services/ingreso.service';
import { Ingreso } from './../../models/ingreso';
import { Categoria } from './../../models/categoria';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-ingreso',
  templateUrl: './crear-ingreso.component.html',
  styleUrls: ['./crear-ingreso.component.css']
})
export class CrearIngresoComponent implements OnInit {

  categorias: Categoria[];
  ingreso: Ingreso;

  constructor(
    private ingresoService: IngresoService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { 
    this.ingreso = new Ingreso();
   }

  ngOnInit(): void {
    this.categoriaService.obtenerCategorias().subscribe(res => {
      this.categorias = res;
    })
  }

  crearIngreso(){
      this.ingresoService.crearIngreso(this.ingreso).subscribe(() => {
        this.router.navigate(['/ingresos']);
      },
      err =>{
        console.log(err);
      }
      )
      console.log(this.ingreso);
  }

  cancelar(){
    this.router.navigate(['/ingresos']);
  }

}
