import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Think } from '../think';
import { ThinkService } from '../think.service';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update {
  thought: Think = {
    id: '0',
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
    this.service.searchById(id!).subscribe((item) => {
      this.thought = item;
    });
  }

  edit() {
    console.log('chamou', this.thought);
    this.service.update(this.thought).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  cancel() {
    this.router.navigate(['/list']);
  }
}
