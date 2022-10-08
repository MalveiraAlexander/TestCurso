import { Component, OnInit } from '@angular/core';
import { StartwarsService } from 'src/app/services/startwars.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  urlImg: string;
  constructor(private sw: StartwarsService) { }

  ngOnInit(): void {
    this.getDog();
  }

  getDog() {
    this.sw.getDog().subscribe({
      next: (data: any) => {
        this.urlImg = data.data.images.original.url;
      }
    })
  }

}
