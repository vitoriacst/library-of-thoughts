import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  list = [
      {
        content: 'I love Angular',
        authorsip:'developer',
        model:'modelo3'
      },
      {
        content: 'Minha propriedade é decorada com  o @Input',
        authorsip:'dev',
        model:'modelo1'
      }
  ]
}
