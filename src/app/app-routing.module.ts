import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { GenreListComponent } from './components/genre/genre-list/genre-list.component';
import { PageNotFoundComponent } from './components/-extras/page-not-found/page-not-found.component';
import {ArtistListComponent} from './components/artist/artist-list/artist-list.component';
import {SongListComponent} from './components/song/song-list/song-list.component';

// Routes
const routes: Routes = [
  // Redirect to base url
  { path: '', redirectTo: '/', pathMatch: 'full' },

  // Used paths.
  { path: 'genres', component: GenreListComponent },
  { path: 'artists', component: ArtistListComponent },
  { path: 'songs', component: SongListComponent },

  // Redirect to 404 not found
  { path: '**', component: PageNotFoundComponent }
];

// Decorator
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
