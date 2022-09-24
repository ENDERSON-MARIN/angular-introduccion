import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <!-- <button (click)="acumulador(base * -1)">-{{ base }}</button> -->
    <button (click)="acumulador(base * -1)">-{{ -base }}</button>

    <span> {{ numero }} </span>

    <button (click)="acumulador(base)">+ {{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 20;
  base: number = 5;

  // sumar(){
  //   this.numero += 1;
  // }

  // restar(){
  //   this.numero -= 1;
  // }

  /* en un solo metodo */
  acumulador(valor: number) {
    this.numero += valor;
  }
}
