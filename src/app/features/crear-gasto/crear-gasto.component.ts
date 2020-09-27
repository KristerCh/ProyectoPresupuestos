import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Gasto } from 'src/app/models/gasto';
import { GastosService } from 'src/app/services/gastos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-gasto',
  templateUrl: './crear-gasto.component.html',
  styleUrls: ['./crear-gasto.component.css']
})

export class CrearGastoComponent implements OnInit {
  categorias: Categoria[];
  gastos: Gasto;

  constructor(private gastoService: GastosService,
    private categoriaService: CategoriaService,
    private router: Router) { 
      this.gastos = new Gasto();
    }

  ngOnInit(): void {
    this.categoriaService.obtenerCategorias().subscribe(res => {
      this.categorias = res;
    })
  }

  crearGasto(){
    this.gastoService.crearGasto(this.gastos).subscribe(() => {
      this.router.navigate(['/gastos']);
    },
    err =>{
      console.log(err);
    }
    )
    console.log(this.gastos);
}

cancelar(){
  this.router.navigate(['/gastos']);
}


}
