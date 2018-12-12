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
import {ArtistDetailComponent} from './components/artist/artist-detail/artist-detail.component';
import {ArtistCreateComponent} from './components/artist/artist-create/artist-create.component';
import {SongDetailComponent} from './components/song/song-detail/song-detail.component';
import {SongCreateComponent} from './components/song/song-create/song-create.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';

// Routes
const routes: Routes = [
  // Redirect to base url
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  // Used paths.
  { path: 'dashboard', component: DashboardComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'genres', component: GenreListComponent },
  { path: 'genres/add', component: GenreCreateComponent },
  { path: 'genres/:_id', component: GenreDetailComponent },
  { path: 'artists', component: ArtistListComponent },
  { path: 'artists/add', component: ArtistCreateComponent },
  { path: 'artists/:_id', component: ArtistDetailComponent },
  { path: 'songs', component: SongListComponent },
  { path: 'songs/add', component: SongCreateComponent },
  { path: 'songs/:_id', component: SongDetailComponent },

  // Redirect to 404 not found
  { path: '**', component: PageNotFoundComponent }
];

// Decorator
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
