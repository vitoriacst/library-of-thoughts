import { Component, Input } from '@angular/core';
import { Think } from '../think';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() thinkings: Think = {
    id: '0',
    authorship: 'vivi',
    model: 'moodelo3',
    content: 'teste',
  };

  constructor() {}

  ngOnInit(): void {}

  widthThought() {
    if (this.thinkings.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
