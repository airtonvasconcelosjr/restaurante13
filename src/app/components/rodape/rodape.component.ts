import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements  OnInit, AfterViewInit {

  ngAfterViewInit() {
    const currentYear = new Date().getFullYear();
    const element = document.getElementById('current-year');
    if (element) {
      element.textContent = currentYear.toString();
    }
  }
  ngOnInit() {
  }

}

