import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiciosComponent } from './nav-bar/servicios/servicios.component';
import { PreciosComponent } from './nav-bar/precios/precios.component';
import { ContactoComponent } from './nav-bar/contacto/contacto.component';
import { NovedadesComponent } from './nav-bar/novedades/novedades.component';
import { ReservarComponent } from './nav-bar/reservar/ReservarComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    PreciosComponent,
    ContactoComponent,
    NovedadesComponent,
    ReservarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
