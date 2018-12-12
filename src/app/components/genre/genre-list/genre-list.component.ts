import { Component, OnInit } from '@angular/core';

import { Genre } from '../../../models/genre';
import { GenreService } from '../genre.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  genres: Genre[];

  /**const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; */

  constructor(
    private location: Location,
    private genreService: GenreService
  ) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getGenres()
      .subscribe(genres => {
        this.genres = genres;
        console.log(this.genres);
      });
  }

  goToDetails(genre): void {
    this.location.go('/genres/' + genre._id);
  }
}
