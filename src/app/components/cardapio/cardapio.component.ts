import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CardapioComponent {
  cards: any[] = [
    { image: 'assets/imagens/segunda.png', alt: 'Image 1' },
    { image: 'assets/imagens/terça.png', alt: 'Image 2' },
    { image: 'assets/imagens/quarta.png', alt: 'Image 3' },
    { image: 'assets/imagens/quinta.png', alt: 'Image 4' },
    { image: 'assets/imagens/sexta.png', alt: 'Image 5' },
    { image: 'assets/imagens/sabado.png', alt: 'Image 6' }
  ];
}