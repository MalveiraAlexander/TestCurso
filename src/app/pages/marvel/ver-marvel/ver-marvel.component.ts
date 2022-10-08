import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-ver-marvel',
  templateUrl: './ver-marvel.component.html',
  styleUrls: ['./ver-marvel.component.scss']
})
export class VerMarvelComponent implements OnInit {

  id: number;
  name: string;
  constructor(private active: ActivatedRoute, private marvel: MarvelService) { }

  ngOnInit(): void {
    this.active.queryParams.subscribe((data: any) => {
      this.id = data['id'];
      this.name = data['name'];
    })
  }

  borrar(id: number) {
    this.marvel.delete(id).subscribe({
      next: (data: any) => {},
      error: (error) => {
        console.log(error);
      }
    })
  }


}
