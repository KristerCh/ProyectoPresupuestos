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

@NgModule({
  declarations: [
    AppComponent,
    IngresosComponent,
    InicioComponent,
    CrearIngresoComponent,
    EditarIngresoComponent,
    PaginaNoSeEncuentraComponent,
    NavegacionComponent
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
