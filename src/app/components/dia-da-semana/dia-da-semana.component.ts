import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia-da-semana',
  templateUrl: './dia-da-semana.component.html',
  styleUrls: ['./dia-da-semana.component.css']
})
export class DiaDaSemanaComponent implements OnInit {
  imagemUrl: string | undefined;
  mensagem: string | undefined;

  ngOnInit() {
    const diaSemana = new Date().getDay(); // Obtém o dia da semana atual (0 - Domingo, 1 - Segunda, 2 - Terça, ...)
    const imagens = [
      "url_da_imagem_do_domingo",
      "url_da_imagem_da_segunda",
      "url_da_imagem_da_terca",
      "url_da_imagem_da_quarta",
      "url_da_imagem_da_quinta",
      "./assets/imagens/sexta.png",
      "./assets/imagens/sabado.png"
    ];
    this.imagemUrl = imagens[diaSemana];
  }
}