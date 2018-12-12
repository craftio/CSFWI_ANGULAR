import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Genre} from '../../../models/genre';
import {GenreService} from '../../../services/genre.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {
  origins = [
    'NORTH-AMERICA',
    'SOUTH-AMERICA',
    'WEST-EUROPE',
    'EAST-EUROPE',
    'AFRICA',
    'MIDDLE-EAST',
    'WEST-ASIA',
    'EAST-ASIA',
    'SOUTH-ASIA',
    'OCEANIA',
    'UNKNOWN'
  ];
  popularities = [
    'HIGH',
    'MEDIUM',
    'LOW',
    'FRESH'
  ];

  genreForm = this.fb.group({
    genreName: ['', Validators.required],
    genreDescription: ['', Validators.required],
    genreOrigin: ['UNKNOWN'],
    genrePopularity: ['FRESH']
  });

  genre: Genre = new Genre(
    this.genreForm.value.genreName,
    this.genreForm.value.genreDescription,
    this.genreForm.value.genreOrigin,
    this.genreForm.value.genrePopularity
  );

  constructor(
    private fb: FormBuilder,
    private genreService: GenreService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  /**
   * CRUD functions
   */
  create(): void {
    this.genre.name = this.genreForm.value.genreName;
    this.genre.description = this.genreForm.value.genreDescription;
    this.genre.origin = this.genreForm.value.genreOrigin;
    this.genre.popularity = this.genreForm.value.genrePopularity;
    console.log(this.genre);

    this.genreService.createGenre(this.genre)
      .subscribe(() => this.goBack());
  }

  /**
   * Other functions
   */
  onSubmit() {
    console.log(this.genreForm.value);
  }

  goBack(): void {
    this.location.back();
  }
}
