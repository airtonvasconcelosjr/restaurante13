import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia-da-semana',
  templateUrl: './dia-da-semana.component.html',
  styleUrls: ['./dia-da-semana.component.css']
})
export class DiaDaSemanaComponent implements OnInit {
  
  imagemUrl: string = '';
  mensagem: string | undefined;

  ngOnInit() {
    const diaSemana = new Date().getDay(); // Obtém o dia da semana atual (0 - Domingo, 1 - Segunda, 2 - Terça, ...)
    const imagens = [
      "./assets/imagens/domingo.png",
      "./assets/imagens/segunda.png",
      "./assets/imagens/terça.png",
      "./assets/imagens/quarta.png",
      "./assets/imagens/quinta.png",
      "./assets/imagens/sexta.png",
      "./assets/imagens/sabado.png",
    ];
    this.imagemUrl = imagens[diaSemana];
    const mensagens = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ]
    this.mensagem = mensagens[diaSemana]
  }
}