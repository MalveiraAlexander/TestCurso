import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ability, Heroe, Person, PersonResponse } from 'src/app/models/marvel.model';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit {

  persons: PersonResponse[] = [];
  constructor(private marvel: MarvelService, private router: Router) { }

  ngOnInit(): void {
    this.getall();
  }

  goTo(identificador: number, nombre: string) {
    this.router.navigate(['marvel1'], { queryParams: {id: identificador, name: nombre}});
  }

  addMarvel() {
    let person: Person = new Person();
    person.age = 30;
    person.heroe = new Heroe();
    person.heroe.name = "Thor";
    person.heroe.description = "Dios del Trueno";
    person.heroe.picture = "https://th.bing.com/th/id/R.e8cdfcbff94f5463f9d9b0fe81aeb26a?rik=dw7QouP38u0PNw&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f22100000%2fThor-pics-thor-2011-22155395-1707-2560.jpg&ehk=wqYx7h5MqbWn0HbkJ10dco05ckiFQySQ266ZIhVbc2U%3d&risl=&pid=ImgRaw&r=0"
    person.heroe.abilities = [];
    let abilities: Ability = new Ability();
    abilities.description = "Martillo";
    abilities.name = "Martillo";
    person.heroe.abilities.push(abilities);
    person.lastName = "Thor";
    person.name = "Thor";
    this.marvel.add(person).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.getall();
      }
    })
  }

  updateMarvel() {
    let person: Person = new Person();
    person.age = 30;
    person.heroe = new Heroe();
    person.heroe.name = "Tanos";
    person.heroe.description = "El Titan Loco";
    person.heroe.picture = "https://i.redd.it/pnmye53bjdl21.jpg"
    person.heroe.abilities = [];
    let abilities: Ability = new Ability();
    abilities.description = "Guantelete";
    abilities.name = "Guantelete";
    person.heroe.abilities.push(abilities);
    person.lastName = "Tanos";
    person.name = "Tanos";
    this.marvel.update(person, 1).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.getall();
      }
    })
  }


  getall() {
    this.persons = [];
    this.marvel.all().subscribe({
      next: (data: any) => {
        console.log(data);
        this.persons = data;
      }
    })
  }
}
