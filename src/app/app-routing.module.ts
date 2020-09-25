import { IngresosComponent } from './features/ingresos/ingresos.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearIngresoComponent } from './features/crear-ingreso/crear-ingreso.component';
import { EditarIngresoComponent } from './features/editar-ingreso/editar-ingreso.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'ingresos/crear', component: CrearIngresoComponent },
  { path: 'ingresos/editar/:id', component: EditarIngresoComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
