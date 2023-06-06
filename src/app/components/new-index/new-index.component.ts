import { Component } from '@angular/core';

@Component({
  selector: 'app-new-index',
  templateUrl: './new-index.component.html',
  styleUrls: ['./new-index.component.css']
})
export class NewIndexComponent {

  cardapio: string | undefined;
  mensagem: string | undefined;

  ngOnInit() {
    const diaSemana = new Date().getDay(); // Obtém o dia da semana atual (0 - Domingo, 1 - Segunda, 2 - Terça, ...)
    const opcoes = [
      "O Restaurante não funciona aos Domingos, volte novamente amanhã",
      "Temos como opções, filé de frango, bife acebolado, parmegiana, picanha com fritas e filé de tilápia.",
      "Temos como opções, filé de frango, bife acebolado, parmegiana, picanha com fritas e filé de tilápia.",
      "Temos como opções, filé de frango, bife acebolado, parmegiana, picanha com fritas e filé de tilápia.",
      "Temos como opções, filé de frango, bife acebolado, parmegiana, picanha com fritas e filé de tilápia.",
      "Temos como opções, filé de frango, bife acebolado, parmegiana, picanha com fritas e filé de tilápia.",
    ];
    this.cardapio = opcoes[diaSemana];
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