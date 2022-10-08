import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './pages/people/people.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { MarvelComponent } from './pages/marvel/marvel.component';
import { VerMarvelComponent } from './pages/marvel/ver-marvel/ver-marvel.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    DogsComponent,
    MarvelComponent,
    VerMarvelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
