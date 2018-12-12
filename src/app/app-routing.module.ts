import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { GenreListComponent } from './components/genre/genre-list/genre-list.component';
import { PageNotFoundComponent } from './components/-extras/page-not-found/page-not-found.component';
import {ArtistListComponent} from './components/artist/artist-list/artist-list.component';
import {SongListComponent} from './components/song/song-list/song-list.component';
import {DashboardComponent} from './components/-extras/dashboard/dashboard.component';
import {GenreDetailComponent} from './components/genre/genre-detail/genre-detail.component';
import {GenreCreateComponent} from './components/genre/genre-create/genre-create.component';

// Routes
const routes: Routes = [
  // Redirect to base url
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Used paths.
  { path: 'dashboard', component: DashboardComponent },
  { path: 'genres', component: GenreListComponent },
  { path: 'genres/add', component: GenreCreateComponent },
  { path: 'genres/:_id', component: GenreDetailComponent },
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
