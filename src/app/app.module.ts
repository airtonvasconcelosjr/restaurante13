import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { IndexComponent } from './components/index/index.component';
import { DiaDaSemanaComponent } from './components/dia-da-semana/dia-da-semana.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ContatoComponent } from './components/contato/contato.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { IndexNewComponent } from './components/index-new/index-new.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    IndexComponent,
    DiaDaSemanaComponent,
    CardapioComponent,
    ContatoComponent,
    MapaComponent,
    IndexNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
