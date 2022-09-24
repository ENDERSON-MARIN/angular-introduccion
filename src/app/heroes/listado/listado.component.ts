import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Batman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    //this.heroes.shift();/* remueve el 1er elemento */
    this.heroeBorrado =
      this.heroes.pop() || ''; /* remueve el ultimo elemento */
  }
}
