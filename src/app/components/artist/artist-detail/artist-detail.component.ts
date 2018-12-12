import { Component, OnInit } from '@angular/core';
import {Artist} from '../../../models/artist';
import {Genre} from '../../../models/genre';
import {GenreService} from '../../genre/genre.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {ArtistService} from '../artist.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist;

  artistForm = this.fb.group({
    artistName: [''],
    artistAge: ['', Validators.min(0)]
  });

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getArtist();
  }

  getArtist(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.artistService.getArtist(_id)
      .subscribe(artist => {
        this.artist = artist;

        this.artistForm.setValue({
          artistName: artist.name,
          artistAge: artist.age
        });
      });
  }

  update(): void {
    this.artist.name = this.artistForm.value.artistName;
    this.artist.age = +this.artistForm.value.artistAge;

    console.log(this.artist);

    this.artistService.updateArtist(this.artist)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.artistService.deleteArtist(_id)
      .subscribe(() => this.goBack());
  }

  onSubmit() {
    console.log(this.artistForm.value);
  }

  goBack(): void {
    this.location.back();
  }
}
