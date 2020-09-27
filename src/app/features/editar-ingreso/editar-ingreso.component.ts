import { Ingreso } from './../../models/ingreso';
import { Categoria } from './../../models/categoria';
import { CategoriaService } from './../../services/categoria.service';
import { IngresoService } from './../../services/ingreso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-ingreso',
  templateUrl: './editar-ingreso.component.html',
  styleUrls: ['./editar-ingreso.component.css']
})
export class EditarIngresoComponent implements OnInit {

  categorias: Categoria[];
  ingreso: Ingreso;

  constructor(
    private ingresoService: IngresoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.ingreso = new Ingreso();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.categoriaService.obtenerCategorias().subscribe(res => {
      this.categorias = res;
    });

    this.ingresoService.obtenerIngreso(id).subscribe(response => {
      this.ingreso = response;
    });;
  }

  editarIngreso(){
    this.ingresoService.editarIngreso(this.ingreso)
    .subscribe(() => {
      this.router.navigate(['/ingresos']);
    });
  }

  cancelar(){
    this.router.navigate(['/ingresos']);
  }


}
