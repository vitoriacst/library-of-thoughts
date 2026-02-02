import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Think } from './think';

@Injectable({
  providedIn: 'root',
})
export class ThinkService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  list(): Observable<Think[]> {
    return this.http.get<Think[]>(this.API);
  }

  create(think: Think): Observable<Think> {
    return this.http.post<Think>(this.API, think);
  }
}
