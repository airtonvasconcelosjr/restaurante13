import { Component, OnInit } from '@angular/core';
declare const Audio: any; // Importando a classe Audio do JavaScript

@Component({
  selector: 'app-dia-da-semana',
  templateUrl: './dia-da-semana.component.html',
  styleUrls: ['./dia-da-semana.component.css']
})
export class DiaDaSemanaComponent implements OnInit {
  imagemUrl: string = '';
  mensagem: string | undefined;
  sons = [
    './assets/efeitos-sonoros-rodrigo-faro-(o-melhor-do-brasil)-melhorado-by-voicemod.mp3',
    './assets/ao-potência---rodrigo-faro-by-voicemod.mp3',
    './assets/tapa-rodrigo-faro-by-voicemod.mp3',
    './assets/sons-do-rodrigo-faro-3-by-voicemod.mp3',
    './assets/cheeeega---rodrigo-faro-by-voicemod.mp3',
    './assets/demais---rodrigo-faro-by-voicemod.mp3',
    './assets/efeitos-sonoros-do-rodrigo-faro-(1)-by-voicemod.mp3',
  ];

  ngOnInit() {
    const diaSemana = new Date().getDay(); // Obtém o dia da semana atual (0 - Domingo, 1 - Segunda, 2 - Terça, ...)
    const imagens = [
      "./assets/imagens/domingo.png",
      "./assets/imagens/segunda.png",
      "./assets/imagens/terca.png",
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
    ];
    this.mensagem = mensagens[diaSemana];
  }

  reproduzirSom(indice: number) {
    if (indice >= 0 && indice < this.sons.length) {
      const audio = new Audio(this.sons[indice]);
      audio.play();
    }
  }
}
