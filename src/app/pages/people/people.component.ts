import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { People } from 'src/app/models/people.model';
import { StartwarsService } from 'src/app/services/startwars.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: People;

  constructor(private startService: StartwarsService) { }

  ngOnInit(): void {
    this.getAllNew();
  }

  getAllOld(){
    this.startService.getAllPeople(1).subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
    }, () => {
      console.log("Listo!");
    });
  }

  getAllNew(){
    this.startService.getAllPeople(1).subscribe(
      {
        error: (error) => {
          console.log("Error!");
          console.log(error);
        },
        next: (data: People) => {
          console.log("Consultando Api!");
          console.log(data);
          this.people = data;
        },
        complete: () => {
          console.log("Listo!");
          this.AddFilmToResult();
        }
      }
    );
  }

  AddFilmToResult() {
    this.people.results.forEach(element => {
      element.films2 = [];
      element.films.forEach(element1 => {
        this.startService.getFilm(this.GetID(element1)).subscribe(
          {
            next: (data: Film) => {
              element.films2.push(data);
            }
          }
        )
      });
    });
    console.log(this.people);

  }

  private GetID(url: string): string {
    return url[url.length - 2];
  }
}
