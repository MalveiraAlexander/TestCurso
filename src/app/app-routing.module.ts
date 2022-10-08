import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './pages/dogs/dogs.component';
import { MarvelComponent } from './pages/marvel/marvel.component';
import { VerMarvelComponent } from './pages/marvel/ver-marvel/ver-marvel.component';
import { PeopleComponent } from './pages/people/people.component';

const routes: Routes = [
  {path: '', redirectTo: 'people', pathMatch: 'full'},
  {path: 'people', component: PeopleComponent, title: 'Clase4 - Personas'},
  {path: 'gif', component: DogsComponent, title: 'Clase4 - Gifs'},
  {path: 'marvel', component: MarvelComponent, title: 'Clase4 - Marvel'},
  {path: 'marvel/:id', component: VerMarvelComponent, title: 'Clase4 - Marvel Persona'},
  {path: 'marvel1', component: VerMarvelComponent, title: 'Clase4 - Marvel Persona'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
