import { IngresoService } from './../../services/ingreso.service';
import { Ingreso } from './../../models/ingreso';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: Ingreso[];

  constructor(
    private ingresoService: IngresoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIngresos();
  }

  getIngresos(){
    this.ingresoService.obtenerIngresos().subscribe(data => {
      this.ingresos = data;
    })
  }

  crearIngreso(){
    this.router.navigate(['/ingresos/crear']);
  }

  editarIngreso(id: Number){
    this.router.navigate(['/ingresos/editar', id]);
  }

  deleteIngreso(id: Number){
    const res = confirm("Desea eliminar este registro?");
    if(res){
      this.ingresoService.eliminarIngresos(id).subscribe(() => {
        this.getIngresos();
      })
    }
  }

}
