import { Artist } from '../../models/artist';

import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { error } from 'selenium-webdriver';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// Injectable decorator.
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  api_url = 'https://btaks-csfwi-api.herokuapp.com/api';
  artistUrl = `${this.api_url}/artists`;

  constructor(
    private http: HttpClient
  ) { }

  // Create artist.
  createArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(`${this.artistUrl}`, artist, httpOptions)
      .pipe(
        catchError(this.handleError<Artist>('createArtist'))
      );
  }

  // Read artists.
  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistUrl)
      .pipe(
        catchError(this.handleError('getArtists', []))
      );
  }

  getArtist(_id: string): Observable<Artist> {
    const url = `${this.artistUrl}/${_id}`;
    return this.http.get<Artist>(url)
      .pipe(
        catchError(this.handleError<Artist>(`getArtist id=${_id}`))
      );
  }

  updateArtist(artist: Artist | string): Observable<Artist> {
    const _id = typeof artist === 'string' ? artist : artist._id;
    const url = `${this.artistUrl}/${_id}`;
    return this.http.put(url, artist, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateArtist'))
      );
  }

  deleteArtist(artist: Artist | string): Observable<Artist> {
    const _id = typeof artist === 'string' ? artist : artist._id;
    const url = `${this.artistUrl}/${_id}`;

    return this.http.delete<Artist>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Artist>('deleteArtist'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
}
