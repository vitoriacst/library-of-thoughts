import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThinkService } from '../think.service';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  constructor(
    private service: ThinkService,
    private router: Router,
  ) {}

  thought = {
    content: 'Learning Angular',
    authorship: 'developer',
    model: 'modelo1',
  };

  create() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  cancel() {
    this.router.navigate(['/list']);
  }
}
