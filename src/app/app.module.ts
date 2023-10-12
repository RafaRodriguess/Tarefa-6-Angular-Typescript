import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CalcularMediaComponent,
    ApoliceSeguroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
