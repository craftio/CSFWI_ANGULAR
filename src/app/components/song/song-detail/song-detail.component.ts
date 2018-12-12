import { Component, OnInit } from '@angular/core';
import {Song} from '../../../models/song';
import {Location} from '@angular/common';
import {FormBuilder, Validators} from '@angular/forms';
import {GenreService} from '../../genre/genre.service';
import {ActivatedRoute} from '@angular/router';
import {SongService} from '../song.service';
import {Genre} from '../../../models/genre';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  song: Song;
  genres: Genre[];

  songForm = this.fb.group({
    songName: [''],
    songLength_s: ['', Validators.min(1)],
    songBpm: ['', Validators.min(1)],
    songGenre: [''],
    songArtists: ['']
  })

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private genreService: GenreService,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getSong();
  }

  getSong(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.songService.getSong(_id)
      .subscribe(song => {
        this.song = song;

        this.songForm.setValue({
          songName: song.name,
          songLength_s: song.length_s,
          songBpm: song.bpm,
          songGenre: song.genre,
          songArtists: song.artists[0]
        });
      });
    this.genreService.getGenres()
      .subscribe(genres => {
        this.genres = genres;
      });
  }
}
