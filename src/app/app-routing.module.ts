import { EditarGastoComponent } from './features/editar-gasto/editar-gasto.component';
import { CrearGastoComponent } from './features/crear-gasto/crear-gasto.component';
import { EditarCategoriaComponent } from './features/editar-categoria/editar-categoria.component';
import { CrearCategoriaComponent } from './features/crear-categoria/crear-categoria.component';
import { CategoriaComponent } from './features/categoria/categoria.component';
import { IngresosComponent } from './features/ingresos/ingresos.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearIngresoComponent } from './features/crear-ingreso/crear-ingreso.component';
import { EditarIngresoComponent } from './features/editar-ingreso/editar-ingreso.component';
import { GastosComponent } from './features/gastos/gastos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'ingresos/crear', component: CrearIngresoComponent },
  { path: 'ingresos/editar/:id', component: EditarIngresoComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria/crear', component: CrearCategoriaComponent },
  { path: 'categoria/editar/:id', component: EditarCategoriaComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'gastos/crear', component: CrearGastoComponent },
  { path: 'gastos/editar/:id', component: EditarGastoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
