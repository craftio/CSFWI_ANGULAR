// Preferred alphabetically ordered imports.
// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/-extras/page-not-found/page-not-found.component';
import { ArtistListComponent } from './components/artist/artist-list/artist-list.component';
import { ArtistDetailComponent } from './components/artist/artist-detail/artist-detail.component';
import { GenreListComponent } from './components/genre/genre-list/genre-list.component';
import { GenreDetailComponent } from './components/genre/genre-detail/genre-detail.component';
import { SongListComponent } from './components/song/song-list/song-list.component';
import { SongDetailComponent } from './components/song/song-detail/song-detail.component';

// Services
import { GenreService } from './services/genre.service';
import {FloorPipe} from './custom-pipes/floor.pipe';
import { DashboardComponent } from './components/-extras/dashboard/dashboard.component';
import { GenreCreateComponent } from './components/genre/genre-create/genre-create.component';

// Decorator
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    GenreListComponent,
    GenreDetailComponent,
    SongListComponent,
    SongDetailComponent,
    FloorPipe,
    DashboardComponent,
    GenreCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    GenreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
