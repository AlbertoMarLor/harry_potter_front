import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/characters' },
  { path: 'movies', component: MoviesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:characterId', component: CharacterComponent },
  { path: '**', redirectTo: '/characters' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
