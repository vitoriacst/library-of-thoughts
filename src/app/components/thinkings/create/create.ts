import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  thought = {
    id: '1',
    content:'Learning Angular',
   authorship: 'developer',
   model:'modelo1'
  }
}
