import { CategoriaService } from './../../services/categoria.service';
import { GastosService } from './../../services/gastos.service';
import { Gasto } from 'src/app/models/gasto';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-gasto',
  templateUrl: './editar-gasto.component.html',
  styleUrls: ['./editar-gasto.component.css']
})
export class EditarGastoComponent implements OnInit {
  categorias: Categoria[];
  gastos: Gasto;

  constructor(
    private gastoService: GastosService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.gastos = new Gasto();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.categoriaService.obtenerCategorias().subscribe(res => {
      this.categorias = res;
    });

    this.gastoService.obtenerGasto(id).subscribe(response => {
      this.gastos = response;
    });;

    console.log(id);
  }

  editarGasto(){
    this.gastoService.editarGasto(this.gastos)
    .subscribe(() => {
      this.router.navigate(['/gastos']);
    });
  }

  cancelar(){
    this.router.navigate(['/gastos']);
  }

}
