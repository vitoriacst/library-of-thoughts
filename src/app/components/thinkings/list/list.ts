import { Component } from '@angular/core';
import { Think } from '../think';
import { ThinkService } from '../think.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  list: Think[] = [];

  constructor(private service: ThinkService) {}

  ngOnInit(): void {
    this.service.list().subscribe((items) => {
      this.list = items;
    });
  }
}
