import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresosComponent } from './features/ingresos/ingresos.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { CrearIngresoComponent } from './features/crear-ingreso/crear-ingreso.component';
import { EditarIngresoComponent } from './features/editar-ingreso/editar-ingreso.component';
import { PaginaNoSeEncuentraComponent } from './features/pagina-no-se-encuentra/pagina-no-se-encuentra.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './features/categoria/categoria.component';
import { CrearCategoriaComponent } from './features/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './features/editar-categoria/editar-categoria.component';
import { GastosComponent } from './features/gastos/gastos.component';
import { CrearGastoComponent } from './features/crear-gasto/crear-gasto.component';
import { EditarGastoComponent } from './features/editar-gasto/editar-gasto.component';
import { ModulosComponent } from './features/modulos/modulos.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresosComponent,
    InicioComponent,
    CrearIngresoComponent,
    EditarIngresoComponent,
    PaginaNoSeEncuentraComponent,
    NavegacionComponent,
    CategoriaComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    GastosComponent,
    CrearGastoComponent,
    EditarGastoComponent,
    ModulosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
