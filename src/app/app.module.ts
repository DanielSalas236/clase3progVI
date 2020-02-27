import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CardsComponent } from './cards/cards.component';
import { TablaComponent } from './tabla/tabla.component';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CardsComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
