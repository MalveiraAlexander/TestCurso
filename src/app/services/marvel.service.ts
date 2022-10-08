import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../models/marvel.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url: string = 'https://localhost:7169/api/'
  constructor(private http: HttpClient) { }

  add(person: Person) {
    return this.http.post(`${this.url}heroes/add`, person);
  }

  update(person: Person, id: number) {
    return this.http.put(`${this.url}heroes/update?id=${id}`, person);
  }

  all() {
    return this.http.get(`${this.url}heroes/all`);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}heroes/delete?id=${id}`)
  }
}
