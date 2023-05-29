import { Component } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {

  imagemSelecionada: string | null = null;


  fecharImagem() {
    this.imagemSelecionada = null;
  }

  abrirImagemMaior(url: string) {
    this.imagemSelecionada = url;
  }
}