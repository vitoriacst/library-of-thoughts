import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Think } from '../think';
import { ThinkService } from '../think.service';

@Component({
  selector: 'app-delete',
  standalone: false,
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete {
  think: Think = {
    id: '',
    content: '',
    authorship: '',
    model: '',
  };

  constructor(
    private service: ThinkService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchById((id!)).subscribe((item) => {
      this.think = item;
    });
  }

  delete() {
    if (this.think.id) {
      this.service.delete(this.think.id).subscribe(() => {
        this.router.navigate(['/list']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/list']);
  }
}
