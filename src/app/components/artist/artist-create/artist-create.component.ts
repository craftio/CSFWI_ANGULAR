import { Component, OnInit } from '@angular/core';
import {Artist} from '../../../models/artist';
import {FormBuilder, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ArtistService} from '../artist.service';

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.css']
})
export class ArtistCreateComponent implements OnInit {
  artist: Artist = new Artist();

  artistForm = this.fb.group({
    artistName: ['', Validators.required],
    artistAge: ['', Validators.compose([Validators.min(0), Validators.required])]
  });

  constructor(
    private fb: FormBuilder,
    private artistService: ArtistService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  /**
   * CRUD functions
   */
  create(): void {
    this.artist.name = this.artistForm.value.artistName;
    this.artist.age = +this.artistForm.value.artistAge;
    console.log(this.artist);

    this.artistService.createArtist(this.artist)
      .subscribe(() => this.goBack());
  }

  onSubmit() {
    console.log(this.artistForm.value);
  }

  goBack(): void {
    this.location.back();
  }
}
