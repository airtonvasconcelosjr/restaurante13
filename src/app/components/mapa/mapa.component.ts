import { Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    // Configurações iniciais do mapa
    const mapOptions = {
      center: { lat: -23.5505, lng: -46.6333 }, // Coordenadas da localização inicial
      zoom: 12 // Nível de zoom inicial
    };

    // Criação do mapa
    const map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
  }
}
