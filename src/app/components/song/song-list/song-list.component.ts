import { Component, OnInit } from '@angular/core';

import { Song } from '../../../models/song';
import { SongService } from '../song.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songs: Song[];

  constructor(
    private location: Location,
    private songService: SongService
  ) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(): void {
    this.songService.getSongs()
      .subscribe(songs => {
        this.songs = songs;
        console.log(songs);
      });
  }
}
