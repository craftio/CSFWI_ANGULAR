import {Component, Input, OnInit} from '@angular/core';
import {Genre} from '../../../models/genre';
import {ActivatedRoute} from '@angular/router';
import {GenreService} from '../../../services/genre.service';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
  genre: Genre;

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
    genreName: [''],
    genreDescription: [''],
    genreOrigin: [''],
    genrePopularity: ['']
  });


  constructor(
    private route: ActivatedRoute,
    private genreService: GenreService,
    private location: Location,
    private fb: FormBuilder
  ) { }

  /**
   * Lifecycle hooks.
   */
  ngOnInit(): void {
    this.getGenre();
  }

  /**
   * CRUD functions
   */
  getGenre(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.genreService.getGenre(_id)
      .subscribe(genre => {
        this.genre = genre;

        this.genreForm.setValue({
          genreName: genre.name,
          genreDescription: genre.description,
          genreOrigin: genre.origin,
          genrePopularity: genre.popularity
        });
      });
  }

  update(): void {
    this.genre.name = this.genreForm.value.genreName;
    this.genre.description = this.genreForm.value.genreDescription;
    this.genre.origin = this.genreForm.value.genreOrigin;
    this.genre.popularity = this.genreForm.value.genrePopularity;

    // const _id = this.route.snapshot.paramMap.get('_id');
    this.genreService.updateGenre(this.genre)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.genreService.deleteGenre(_id)
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
