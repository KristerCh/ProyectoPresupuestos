import { GastosService } from './../../services/gastos.service';
import { Gasto } from './../../models/gasto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  gastos: Gasto[];

  constructor(    
    private gastoService: GastosService,
    private router: Router) { }

  ngOnInit(): void {
    this.getGastos();
  }

  getGastos(){
    this.gastoService.obtenerGastos().subscribe(data => {
      this.gastos = data;
    })
  }

  crearGasto(){
    this.router.navigate(['/gastos/crear']);
  }

  editarGasto(id: Number){
    this.router.navigate(['/gastos/editar', id]);
  }

  deleteGasto(id: Number){
    const res = confirm("Desea eliminar este registro?");
    if(res){
      this.gastoService.eliminarGasto(id).subscribe(() => {
        this.getGastos();
      })
    }
  }

}
