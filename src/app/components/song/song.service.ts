import { Song } from '../../models/song';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {error} from 'selenium-webdriver';

// Injectable decorator.
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SongService {
  api_url = 'https://btaks-csfwi-api.herokuapp.com/api';
  songUrl = `${this.api_url}/songs`;

  constructor(
    private http: HttpClient
  ) { }

  // Create song.

  // Read songs.
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.songUrl)
      .pipe(
        catchError(this.handleError('getSongs', []))
      );
  }

  getSong(_id: string): Observable<Song> {
    const _url = `${this.songUrl}/${_id}`;
    return this.http.get<any>(_url)
      .pipe(
        map((result: any) => new Song(result.response)),
        catchError(this.handleError<any>(`getSong id=${_id}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
