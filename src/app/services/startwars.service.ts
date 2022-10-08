import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class StartwarsService {

  url: string = 'https://swapi.dev/api/';
  constructor(private http: HttpClient) { }

  getAllPeople(page: number): Observable<People> {
    return this.http.get<People>(`${this.url}people/?page=${page}`);
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.url}films/${id}/`);
  }


  getDog() {
    return this.http.get(`https://api.giphy.com/v1/gifs/random?api_key=YRb3VzUXU6A3Zqo1FRrxz2eQYwqaSDLO`);
  }
}
